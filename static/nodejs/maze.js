var canvas = document.getElementById("maze")
var context = canva.getContext("2d");
var rectangleX = 450;
var rectangleY = 5
var width = 560;
var height = 560;
var interval;
function createMaze(rx,ry)
{
  makeWhite(0,0, canvas.width,canvas.height);
  var photo = new Image();
  photo.onload = function(){
        context.drawImage(photo, 0, 0);
        drawRectangle(rx, ry, "#0000FF", false, true);
        context.beginPath();
        context.arc(542, 122, 7, 0, 2 * Math.PI, false);
        context.closePath();
        context.fillStyle = '#00FF00';
        context.fill();
  };
  photo.src("maze.gif")

}
function drawRect(dx,dy,style){
    makeWhite(rectangleX, rectangleY, 15, 15);
    rectangleX = x;
    rectangleY = y;
    context.beginPath();
    context.rect(x, y, 15, 15);
    context.closePath();
    context.fillStyle = style;
    context.fill();
}
drawMazeAndRectangle(450, 5);
function makeWhite(xc,yc,widthh,height){
  context.beginPath();
    context.rect(xc, yc, widthh, height);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
}
function moveRect(keyPress){
  var postX;
  var postY;
  var canMove;
  keyPress  = keyPress || window.event;
  switch (keyPress.keyCode){
    case 38;
    case 87;
        postX = rectangleX;
        postY = rectangleY - 3;
        break;
    case 37:   // arrow left 
    case 65:   // A 
        postX = rectangleX - 3;
        postY = rectangleY;
        break;
    case 40:   // arrow down 
    case 83:   // S 
        postX = rectangleX;
        postY = rectangleY + 3;
        break;
    case 39:   // arrow right 
    case 68:   // D 
        postX = rectangleX + 3;
        postY = rectangleY;
        break;
    default: return;
  }
  moveAllow = canMoveTo(postX, postY);
  if (moveAllow === 1){
    drawRect(newX, newY, "#0000FF");
    rectangleX = postX;
    rectangleY = postY;
  }
  else if (movingAllowed === 2) {
        clearInterval(intervalVar);
        makeWhite(0, 0, canvas.width, canvas.height);
        context.font = "40px Raleway";
        context.fillStyle = "blue";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("Congratulations!", canvas.width / 2, canvas.height / 2);
        window.removeEventListener("keydown", moveRect, true);
  }
}
drawMazeAndRectangle(450, 5);                        
window.addEventListener("keydown", moveRect, true);
function canMoveTo(destinationx,destinationy){
    var imgData = context.getImageData(destinationx, destinationy, 15, 15);
    var data = imgData.data;
    var canMove = 1;
    if (destinationX >= 0 && destinationX <= width - 15 && destY >= 0 && destY <= height - 15) { 
      for(var i = 0; i<900; i+=4){
        if(data[i] === 0 && data[i+1] === 0 &&  data[i+2] === 0){
          canMove=0;
          break;
        }else if(data[i] === 0 && data[i + 1] === 255 && data[i + 2] === 0){
          canMove = 2;
          break;
        }
      }
    }else{
      canMove = 0;
    }
    return canMove;
}


