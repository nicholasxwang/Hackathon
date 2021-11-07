var canvas;
var context;
var numbers = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

window.onload = function() {
  var upArrow = 38;
  var downArrow = 40;
  var rightArrow = 39;
  var leftArrow = 37;
}

window.addEventListener('load', function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  document.body.appendChild(canvas);
  generateStartingTiles();
  draw();

  document.addEventListener("onkeyup", function(key) {
    alert(key.keyCode + " pressed")
    switch (key.keyCode) {
      case upArrow:
        for (var x = 1; x < 4; x++) {
          for (var y = 0; y < 4; y++) {
            for (var i = y; i > 1; y--) {
              if (number[x][i-1] > 0)
                break;
              
              number[x][i-1] = number[x][i];
              number[x][i] = 0;
            }
          }
        }
    }
    draw();
  });
});

function draw() {
  alert(numbers);
  context.font = "50px Verdana serif";
  
  for (var x = 0; x < 4; x++) {
    for (var y = 0; y < 4; y++) {
      switch (numbers[x][y]) {
        case 0:
         context.fillStyle = "rgb(100, 100, 100)";
         context.fillRect(x*150, y*150, 148, 148);
         context.fillStyle = "rgb(255, 255, 255)";
         break;
        
        case 2:
          context.fillStyle = "rgb(200, 200, 200)";
          context.fillRect(x*150, y*150, 148, 148);
          context.fillStyle = "rgb(0, 0, 0)";
          break;

        case 4:
         context.fillStyle = "rgb(150, 150, 150)";
         context.fillRect(x*150, y*150, 148, 148);
         context.fillStyle = "rgb(0, 0, 0)";
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
  
  var num = Math.random() < 0.25 ? 4 : 2;
  numbers[x][y] = num;
  numbers[x2][y2] = 2;
}