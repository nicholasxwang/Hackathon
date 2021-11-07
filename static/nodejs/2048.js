var canvas = document.createElement("canvas");
canvas.innerHTML = "This browser does not support canvas or JavaScript.";
canvas.width = "100px";
canvas.height = "100px";
canvas.style.backgroundColor = "lightgray";
canvas.style.border = "1px solid gray";
canvas.style.paddingLeft = "5%";
canvas.style.paddingRight = "5%";

var context = canvas.getContext("2d");
var numbers = [0, 0, 0, 0] * 4;

window.onload = function(){  
  var upArrow = 38;
  var downArrow = 40;
  var rightArrow = 39;
  var leftArrow = 37;

  generateStartingTiles();
  draw();

  window.onkeypress = function(key) {
    if (key.keyCode == upArrow) {

    }
  };
};

window.addEventListener('load', function () {
  document.body.appendChild(canvas);
});

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "50px Arial serif";
  context.fillText(numbers.toString(), 200, 200);
}

function generateStartingTiles() {
  var x = Math.floor(Math.random() * 4);
  var y = Math.floor(Math.random() * 4);
  
  for (var attemptNo = 0; i < 10; i++) {
    var x2 = Math.floor(Math.random() * 4);
    var y2 = Math.floor(Math.random() * 4);

    if (x != x2 || y != y2)
      break;
  }

  var num = Math.random() < 0.15 ? 4 : 2;
  numbers[x][y] = num;
  numbers[x2][y2] = 2;
}