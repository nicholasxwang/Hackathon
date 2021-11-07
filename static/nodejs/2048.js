var canvas;
var context;
var numbers = [0, 0, 0, 0] * 4;

alert("starting")

window.onload = function() {  
  var upArrow = 38;
  var downArrow = 40;
  var rightArrow = 39;
  var leftArrow = 37;

  window.onkeypress = function(key) {
    
  };
};

window.addEventListener('load', function() {
  alert("step 1");
  canvas = document.createElement("CANVAS");
  alert("step 2");
  context = canvas.getContext("2d")
  alert("step 3");
  document.body.appendChild(canvas);
  alert("step 4");

  draw();
  alert("step 5");
  generateStartingTiles();
  alert("step 6");
});

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "50px Arial serif";
  context.fillStyle = "white";
  context.fillText(numbers.toString(), 200, 200);
}

function generateStartingTiles() 
{
  var x = Math.floor(Math.random() * 4);
  var y = Math.floor(Math.random() * 4);

  var x2 = Math.floor(Math.random() * 4);
  var y2 = Math.floor(Math.random() * 4);
  while (x == x2 || y == y2) {
    x2 = Math.floor(Math.random() * 4);
    y2 = Math.floor(Math.random() * 4);
  }

  var num = Math.random() < 0.15 ? 4 : 2;
  numbers[x][y] = num;
  numbers[x2][y2] = 2;
}