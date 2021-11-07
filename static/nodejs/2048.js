var canvas;
var context;
var numbers = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

window.onload = function() {  
  var upArrow = 38;
  var downArrow = 40;
  var rightArrow = 39;
  var leftArrow = 37;

  window.onkeypress = function(key) {
    
  };
};

window.addEventListener('load', function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  document.body.appendChild(canvas);
  draw();
  generateStartingTiles();
});

function draw() {
  context.font = "50px Arial serif";
  context.fillStyle = "lightgray";
  
  for (var x = 0; x < 4; x++) {
    for (var y = 0; y < 4; j++) {
      context.fillRect(x*200, y*200, 200, 200);
    }
  }
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