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
    var copy = numbers.slice();

    switch (key.keyCode) {
      case upArrow:
        for (var y = 1; y <= 4; y++) {
          for (var x = 0; x < 4; x++) {
            var y2 = y;
            while (y2 > 0 && numbers[x][y2] > 0 && (numbers[x][y2-1] == 0 || numbers[x][y2-1] == numbers[x][y2])) {
              valid = true;
              if (numbers[x][y2-1] == numbers[x][y2]) // merge
                numbers[x][y2-1] *= 2;
              else
                numbers[x][y2-1] = numbers[x][y2];

              numbers[x][y2] = 0;

              y2--;
            }
          }
        }

        if (valid)
          generateNewNum();
        break;

      case downArrow:
        for (var y = 3; y >= 0; y--) {
          for (var x = 0; x < 4; x++) {
            var y2 = y;
            while (y2 < 4 && numbers[x][y2] > 0 && (numbers[x][y2+1] == 0 || numbers[x][y2+1] == numbers[x][y2])) {
              valid = true;
              if (numbers[x][y2+1] == numbers[x][y2]) // merge
                copy[x][y2+1] *= 2;
              else
                copy[x][y2+1] = copy[x][y2];

              copy[x][y2] = 0;

              y2++;
            }
          }
        }
        numbers = copy.slice();

        if (valid)
          generateNewNum();
        break;

        case leftArrow:
          for (var y = 0; y < 4; y++) {
            for (var x = 1; x < 4; x++) {
              var x2 = x;
              while (x2 > 0 && numbers[x2][y] > 0 && (numbers[x2-1][y] == 0 || numbers[x2-1][y] == numbers[x2][y])) {
                valid = true;
                if (numbers[x2-1][y] == numbers[x2][y]) // merge
                  numbers[x2-1][y] *= 2;
                else
                  numbers[x2-1][y] = numbers[x2][y];
                numbers[x2][y] = 0;

                x2--;
              }
            }
          }

          if (valid)
            generateNewNum();
          break;

        case rightArrow:
          for (var y = 0; y < 4; y++) {
            for (var x = 3; x >= 0; x--) {
              var x2 = x;
              while (x2 < 3 && numbers[x2][y] > 0 && (numbers[x2+1][y] == 0 || numbers[x2+1][y] == numbers[x2][y])) {
                valid = true;
                if (numbers[x2+1][y] == numbers[x2][y]) // merge
                  numbers[x2+1][y] *= 2;
                else
                  numbers[x2+1][y] = numbers[x2][y];
                numbers[x2][y] = 0;

                x2++;
              }
            }
          }

          if (valid)
            generateNewNum();
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
         context.fillRect(x*150, y*150, 148, 148);
         context.fillStyle = "rgb(256,256,256)";
         break;
        
        case 2:
          context.fillStyle = "rgba(200, 200, 200, 0.3)";
          context.fillRect(x*150, y*150, 148, 148);
          context.fillStyle = "rgb(256,256,256)";
          break;

        case 4:
         context.fillStyle = "rgba(150, 150, 150, 0.3)";
         context.fillRect(x*150, y*150, 148, 148);
         context.fillStyle = "rgb(256,256,256)";
         break;

        case 16:
          context.fillStyle = "rgba(241, 196, 15, 0.3)";
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
  numbers[0] = [2, 2, 4, 0];

  /*
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
  numbers[x2][y2] = 2;*/
}

function generateNewNum() {
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
    alert("Game over!");
  }

  else {
    numbers[xs[ Math.floor(Math.random() * xs.length) ]][ys[ Math.floor(Math.random() * ys.length) ]] = Math.random() < 0.2 ? 4 : 2;
  }
}