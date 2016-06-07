
var body = document.querySelector("body");

var black = document.querySelector(".black");
var pink = document.querySelector(".pink");
var blue = document.querySelector(".blue");
var yellow = document.querySelector(".yellow");
var red = document.querySelector(".red");
var green = document.querySelector(".green");

var textTheme = document.querySelector(".text-theme");

// Events
// ----------------------- //
black.addEventListener('click', changeRangerBlack);
pink.addEventListener('click', changeRangerPink);
blue.addEventListener('click', changeRangerBlue);
yellow.addEventListener('click', changeRangerYellow);
red.addEventListener('click', changeRangerRed);
green.addEventListener('click', changeRangerGreen);


function changeRangerBlack() {
  console.log("Zack, the Black Ranger");
  body.className = "black";
  textTheme.textContent = "Zack, the Black Ranger";
}

function changeRangerPink() {
  console.log("Kimberly, the Pink Ranger");
  body.className = "pink";
  textTheme.textContent = "Kimberly, the Pink Ranger";
}

function changeRangerBlue() {
  console.log("Billy, the Blue Ranger");
  body.className = "blue";
  textTheme.textContent = "Billy, the Blue Ranger";
}

function changeRangerYellow() {
  console.log("Trini, the Yellow Ranger");
  body.className = "yellow";
  textTheme.textContent = "Trini, the Yellow Ranger";
}

function changeRangerRed() {
  console.log("Jason, the Red Ranger");
  body.className = "red";
  textTheme.textContent = "Jason, the Red Ranger";
}

function changeRangerGreen() {
  console.log("Tommy, the Green Ranger");
  body.className = "green";
  textTheme.textContent = "Tommy, the Green Ranger";
  $('#green').append("<img src='img/green.jpg' />");
}
