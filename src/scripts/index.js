//SELECTORS
const hourContainer = document.querySelector(".hour-cont");
const minContainer = document.querySelector(".min-cont");
const secContainer = document.querySelector(".sec-cont");
const darkButton = document.querySelector(".mono1 button");
const lightButton = document.querySelector(".mono2 button");
const randomButton = document.querySelector(".random button");

//FUNCTIONS
function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  hourContainer.innerText = hour;
  minContainer.innerText = min;
  secContainer.innerText = sec;

  var t = setTimeout(function () {
    currentTime();
  }, 1000);
}

function updateTime(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

currentTime();

//TOGGLES SWITCHES
function darkMode() {
  document
    .querySelector(".main-container")
    .setAttribute("style", "background-color: #2b2b2b; color: white");
  document
    .querySelector(".clock")
    .setAttribute(
      "style",
      "border-color: black; box-shadow: 0px 5px 5px 0px #3a3a3a"
    );
  document.querySelector(".mono1").style.display = "none";
  document.querySelector(".mono2").style.display = "unset";
}

function lightMode() {
  document
    .querySelector(".main-container")
    .setAttribute(
      "style",
      "background-color: #e7e6e6; color: black; box-shadow: 0px 5px 5px 0px #000000"
    );
  document
    .querySelector(".clock")
    .setAttribute(
      "style",
      "border-color: #ffffffc5; box-shadow: 0px 5px 5px 0px black"
    );
  document.querySelector(".mono2").style.display = "none";
  document.querySelector(".mono1").style.display = "unset";
}

function color() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let genColor = `rgb(${r},${g},${b})`;
  return genColor;
}

function randomThemer() {
  document.querySelector(".main-container").style.backgroundColor = color();
  document.querySelector(".main-container").style.color = color();
  document.querySelector(".clock").style.borderColor = color();
  document.querySelector(
    ".clock"
  ).style.boxShadow = `0px 5px 5px 0px ${color()}`;
  document.querySelector(".mono1").style.display = "none";
  document.querySelector(".mono2").style.display = "unset";
}

//EVENTS
darkButton.addEventListener("click", darkMode);
lightButton.addEventListener("click", lightMode);
randomButton.addEventListener("click", randomThemer);
