//SELECTORS
const hourContainer = document.querySelector(".hour-cont");
const minContainer = document.querySelector(".min-cont");
const secContainer = document.querySelector(".sec-cont");
const darkButton = document.querySelector(".mono1 button");
const lightButton = document.querySelector(".mono2 button");
const randomButton = document.querySelector(".random button");
const clockConts = document.querySelector(
  ".hour-cont",
  ".min-cont",
  ".sec-cont"
);

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
  document.querySelector(".main-container").style.backgroundColor = "#1f1f1f";
  document.querySelector(".main-container").style.color = "white";
  document.querySelector(".clock").style.borderColor = "black";
  document.querySelector(".clock").style.boxShadow = "0px 5px 5px 0px #3a3a3a";
  document.querySelector(".mono1").style.display = "none";
  document.querySelector(".mono2").style.display = "unset";
}

function lightMode() {
  document.querySelector(".main-container").style.backgroundColor = "#e7e6e6";
  document.querySelector(".main-container").style.color = "black";
  document.querySelector(".clock").style.borderColor = "#f5f5f596";
  document.querySelector(".clock").style.boxShadow = "0px 5px 5px 0px #000000";
  document.querySelector(".mono2").style.display = "none";
  document.querySelector(".mono1").style.display = "unset";
}

//EVENTS
darkButton.addEventListener("click", darkMode);
lightButton.addEventListener("click", lightMode);
