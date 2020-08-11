import '../images/1.jpg'
import '../images/2.jpg'
import '../images/3.jpg'
import '../images/4.jpg'
import '../images/5.jpg'

const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const image = new Image();
  //Todo image 파일 url-loader 사용하기
  image.src = `${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  const randomNumber = genRandom(); 
  paintImage(randomNumber);
}

init();