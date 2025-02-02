const body = document.querySelector("body");

const IMG_NEMBER = 8;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NEMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();