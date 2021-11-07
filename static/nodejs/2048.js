var canvas;
var context;
var keys;
var numbers = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
var upArrow = 38;
var downArrow = 40;
var rightArrow = 39;
var leftArrow = 37;

window.addEventListener('load', function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  keys = document.getElementById("key");
  document.body.appendChild(canvas);
  generateStartingTiles();
  draw();

  document.addEventListener("keydown", function(key) {
    keys.innerHTML = key.code;
    switch (key.keyCode) {
      case upArrow:
        for (var y = 1; y < 4; y++) {
          for (var x = 0; x < 4; x++) {
            var y2 = y;
            while (y2 > 0 && numbers[x][y2] > 0 && numbers[x][y2-1] == 0) {
              numbers[x][y2-1] = numbers[x][y2];
              numbers[x][y2] = 0;

              y2--;
            }
          }
        }
        break;

      case downArrow:
        for (var y = 4; y >= 0; y--) {
          for (var x = 0; x <= 4; x++) {
            y2 = y;
            while (y2 < 3 && numbers[x][y2] > 0 && numbers[x][y2+1] == 0) {
              numbers[x][y2+1] = numbers[x][y2];
              numbers[x][y2] = 0;

              y2++;
            }
          }
        }
        break;
    }
    draw();
  });

  document.addEventListener("keyup", function(key) {
    keys.innerHTML = "No key";
  });
});

function draw() {
  context.font = "50px Verdana serif";
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  for (var x = 0; x < 4; x++) {
    for (var y = 0; y < 4; y++) {
      switch (numbers[x][y]) {
        case 0:
         context.fillStyle = "rgba(243, 156, 18,0.3)";
         context.fillRect(x*150, y*150, 148, 148);
         context.fillStyle = "rgb(256,256,256)";
         break;
        
        case 2:
          context.fillStyle = "rgba(200, 200, 200,0.3)";
          context.fillRect(x*150, y*150, 148, 148);
          context.fillStyle = "rgb(256,256,256)";
          break;

        case 4:
         context.fillStyle = "rgba(150, 150, 150,0.3)";
         context.fillRect(x*150, y*150, 148, 148);
         context.fillStyle = "rgb(256,256,256)";
         break;
      }

      if (numbers[x][y] > 0)
        context.fillText(numbers[x][y].toString(), 60+x*150, 80+y*150);
      
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
  
  var num = Math.random() < 0.2 ? 4 : 2;
  numbers[x][y] = num;
  numbers[x2][y2] = 2;
}