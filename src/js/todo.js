const toDoForm = document.querySelector(".js-to-do"),
  toDoInput = document.querySelector(".js-add-to-do"),
  toDoList = document.querySelector(".js-to-do-list");

let toDos = [];

function handleSubmit(event) {
  event.preventDefault();
  const value = toDoInput.value;
  toDoInput.value = "";
  addToDo(value);
}

function addToDo(text) {
  const toDo = document.createElement("li");
  toDo.className = "to-do";
  toDo.id = toDos.length + 1;
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "❌";
  deleteBtn.className = "to-do__button";
  deleteBtn.addEventListener("click", handleDelete);
  const label = document.createElement("label");
  label.innerHTML = text;
  toDo.appendChild(deleteBtn);
  toDo.appendChild(label);
  toDoList.appendChild(toDo);
  saveToDo(text);
}

function saveToDo(text) {
  const toDoObject = {
    id: toDos.length + 1,
    value: text
  };
  toDos.push(toDoObject);
  persistToDos();
}

// Todo 서버에서 값 가져오기로 변경
function persistToDos() {
  const stringToDo = JSON.stringify(toDos);
  localStorage.setItem("toDos", stringToDo);
}

function handleDelete(event) {
  const target = event.target;
  const li = target.parentElement;
  const ul = li.parentElement;
  const toDoId = li.id;
  ul.removeChild(li);
  toDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(toDoId);
  });
  persistToDos();
}

function loadToDos() {
  const loadedToDos = localStorage.getItem("toDos");
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      addToDo(toDo.value);
    });
  }
  return;
}

function init() {
  loadToDos();
}

toDoForm.addEventListener("submit", handleSubmit);

init();
