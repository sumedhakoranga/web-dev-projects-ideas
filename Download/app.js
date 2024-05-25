let circle = document.querySelector(".circle");
let circleInner = document.querySelector(".circle-inner");
let cloud = document.querySelector(".cloud");
let arrow = document.querySelector(".matrix");
let whiteArrow = document.querySelector(".matrix-white");
let whiteTick = document.querySelector(".white-tick");
let reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  resetButton();
});

document.querySelector(".arrow-container").addEventListener("click", () => {
  start();
});

function start() {
  arrow.classList.add("send-black-arrow");
  whiteArrow.classList.add("send-white-arrow");
  whiteTick.classList.add("white-tick-ani");
  circle.classList.add("complete-circle");
  circleInner.classList.add("complete-circle-fill");
  cloud.classList.add("animate-cloud");
  reset.classList.add("reset-live");
}

function resetButton() {
  arrow.classList.remove("send-black-arrow");
  whiteArrow.classList.remove("send-white-arrow");
  whiteTick.classList.remove("white-tick-ani");
  circle.classList.remove("complete-circle");
  circleInner.classList.remove("complete-circle-fill");
  reset.classList.remove("reset-live");
  cloud.classList.remove("animate-cloud");
}
