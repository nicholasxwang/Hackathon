var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");
var numbers = [0, 0, 0, 0] * 4;

window.onload = function() {  
  var upArrow = 38;
  var downArrow = 40;
  var rightArrow = 39;
  var leftArrow = 37;

  draw();
  generateStartingTiles();

  window.onkeypress = function(key) {
    
  };
};

window.addEventListener('load', function() {
  document.body.appendChild(canvas);
});

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "50px Arial serif";
  context.fillStyle = "white";
  context.fillText(numbers.toString(), 200, 200);
}

function generateStartingTiles() {
  var x = Math.floor(Math.random() * 4);
  var y = Math.floor(Math.random() * 4);

  var x2 = Math.floor(Math.random() * 4);
  var y2 = Math.floor(Math.random() * 4);
  while (x != x2 || y != y2) {
    x2 = Math.floor(Math.random() * 4);
    y2 = Math.floor(Math.random() * 4);

    if (x != x2 || y != y2)
      break;
  }

  var num = Math.random() < 0.15 ? 4 : 2;
  numbers[x][y] = num;
  numbers[x2][y2] = 2;
}