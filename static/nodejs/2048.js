var canvas;
var context;
var score;
var numbers = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
var upArrow = 38;
var downArrow = 40;
var rightArrow = 39;
var leftArrow = 37;
var lost = false;

window.addEventListener('load', function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  score = document.getElementById("score");
  document.body.appendChild(canvas);
  generateStartingTiles();
  draw();

  document.addEventListener("keydown", function(key) {
    var valid = false;
    var copy = JSON.parse(JSON.stringify(numbers));

    switch (key.keyCode) {
      case upArrow:
        for (var y = 1; y <= 4; y++) {
          for (var x = 0; x < 4; x++) {
            var y2 = y;
            while (y2 > 0 && numbers[x][y2] > 0 && (numbers[x][y2-1] == 0 || numbers[x][y2-1] == numbers[x][y2])) {
              valid = true;
              if (numbers[x][y2-1] == numbers[x][y2]) {
                copy[x][y2-1] *= 2; 
                copy[x][y2] = 0;
              } else {
                copy[x][y2-1] = copy[x][y2];
                copy[x][y2] = 0;
                numbers = JSON.parse(JSON.stringify(copy));
              }

              y2--;
            }
          }
        }

        numbers = JSON.parse(JSON.stringify(copy));

        
        generateNewNum(valid);
        break;

      case downArrow:
        for (var y = 3; y >= 0; y--) {
          for (var x = 0; x < 4; x++) {
            var y2 = y;
            while (y2 < 4 && numbers[x][y2] > 0 && (numbers[x][y2+1] == 0 || numbers[x][y2+1] == numbers[x][y2])) {
              valid = true;
              if (numbers[x][y2+1] == numbers[x][y2]) {
                copy[x][y2+1] *= 2; 
                copy[x][y2] = 0;
              } else {
                copy[x][y2+1] = copy[x][y2];
                copy[x][y2] = 0;
                numbers = JSON.parse(JSON.stringify(copy));
              }

              y2++;
            }
          }
        }
        numbers = JSON.parse(JSON.stringify(copy));

        
        generateNewNum(valid);
        break;

        case leftArrow:
          for (var y = 0; y < 4; y++) {
            for (var x = 1; x < 4; x++) {
              var x2 = x;
              while (x2 > 0 && numbers[x2][y] > 0 && (numbers[x2-1][y] == 0 || numbers[x2-1][y] == numbers[x2][y])) {
                valid = true;
                if (numbers[x2-1][y] == numbers[x2][y]) {
                  copy[x2-1][y] *= 2; 
                  copy[x2][y] = 0;
                } else {
                  copy[x2-1][y] = copy[x2][y];
                  copy[x2][y] = 0;
                  numbers = JSON.parse(JSON.stringify(copy));
                }

                x2--;
              }
            }
          }

          numbers = JSON.parse(JSON.stringify(copy));

          
          generateNewNum(valid);
          break;

        case rightArrow:
          for (var y = 0; y < 4; y++) {
            for (var x = 3; x >= 0; x--) {
              var x2 = x;
              while (x2 < 3 && numbers[x2][y] > 0 && (numbers[x2+1][y] == 0 || numbers[x2+1][y] == numbers[x2][y])) {
                valid = true;
                if (numbers[x2+1][y] == numbers[x2][y]) {
                  copy[x2+1][y] *= 2; 
                  copy[x2][y] = 0;
                } else {
                  copy[x2+1][y] = copy[x2][y];
                  copy[x2][y] = 0;
                  numbers = JSON.parse(JSON.stringify(copy));
                }
                numbers[x2][y] = 0;

                x2++;
              }
            }
          }

          numbers = JSON.parse(JSON.stringify(copy));

          
          generateNewNum(valid);
          break;
    }
    draw();
  });
});

function draw() {
  context.font = "50px Verdana serif";
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  for (var x = 0; x < 4; x++) {
    for (var y = 0; y < 4; y++) {
      switch (numbers[x][y]) {
        case 0:
         context.fillStyle = "rgba(243, 156, 18, 0.3)";
         break;
        
        case 2:
          context.fillStyle = "rgba(214, 137, 16, 0.3)";
          break;

        case 4:
         context.fillStyle = "rgba(156, 100, 12, 0.3)";
         break;

        case 8:
          context.fillStyle = "rgba(0, 0, 0, 0.3)";
          break;

        case 16:
          context.fillStyle = "rgba(241, 196, 15, 0.3)";
          break; 

        case 32:
          context.fillStyle = "rgba(183, 149, 11, 0.3)";
          break; 

        case 64:
          context.fillStyle = "rgba(211, 84, 0, 0.3)";
          break; 

        case 128:
          context.fillStyle = "rgba(160, 64, 0, 0.3)";
          break;
        
        case 256:
          context.fillStyle = "rgba(135, 54, 0, 0.3)";
          break; 

        case 512:
          context.fillStyle = "rgba(135, 54, 0, 0.3)";
          break; 

        case 1024:
          context.fillStyle = "rgba(88, 214, 141, 0.3)";
          break; 
        
        case 2048:
          context.fillStyle = "rgba(14, 102, 85, 0.3)";
          break; 
      }

      context.fillRect(x*150, y*150, 148, 148);
      if (numbers[x][y] > 0) {
        context.fillStyle = "rgb(256,256,256)";
        context.fillText(numbers[x][y].toString(), 60+x*150, 80+y*150);
      }
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

function generateNewNum(valid) {
  // check if spots avaliable
  xs = [];
  ys = [];

  for (var x = 0; x < 4; x++) {
    for (var y = 0; y < 4; y++) {
      if (numbers[x][y] == 0) {
        xs.push(x);
        ys.push(y);
      }
    }
  }

  if (xs.length == 0) {
    lost = true;
    for (var x = 0; x < 3; x++) {
      if (numbers[x][y] == numbers[x+1][y])
        lost = false;
    }

    if (lost) {
      for (var y = 0; y < 3; y++) {
        if (numbers[x][y] == numbers[x][y+1])
          lost = false;
      }

      if (lost)
        alert("Game over!");
    }
  }

  if (valid) {
    numbers[xs[ Math.floor(Math.random() * xs.length) ]][ys[ Math.floor(Math.random() * ys.length) ]] = Math.random() < 0.2 ? 4 : 2;
  }
}