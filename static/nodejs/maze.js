var canvas = document.getElementById("maze");
var ctxt = canvas.getContext("2d");
var position_x = 425;
var position_y = 3;
var size_x = 556;
var size_y = 556;
function build(x,y){
  updateRect(0, 0, canvas.width, canvas.height);
  var maze = new Image();
  maze.onload = function(){
    ctxt.drawImage(maze, 0, 0);
    draw(x,y,"#FF0000",false,true);
    ctxt.beginPath();
    ctxt.arc(542, 122, 7, 0, 2 * Math.PI, false);
    ctxt.closePath();
    ctxt.fillStyle = '#A020F0';
    ctxt.fill();
  };
  maze.src = "static/images/maze.gif";
}
function draw(x,y,color){
  updateRect(position_x, position_y, 15, 15);
  position_x = x;
  position_y = y;
  ctxt.beginPath();
  ctxt.rect(x, y, 15, 15);
  ctxt.closePath();
  ctxt.fillStyle = color;
  ctxt.fill();
}
//build(425,3);
function updateRect(x,y,l,h){
  ctxt.beginPath();
  ctxt.rect(x,y,l,h);
  ctxt.closePath();
  ctxt.fillStyle = "white";
  ctxt.fill();
}
function controls(){
  var upx;
  var upy;
  var inMotion;
  key = key || window.event;
  switch(key.keyCode){
    case 38:  
    case 87:   
      upx = position_x;
      upy = position_y - 5;
      break;
    case 37:  
    case 65:  
      upx = position_x - 5;
      upy = position_y;
      break;
    case 40:   
    case 83: 
      upx = position_x;
      upy = position_y + 5;
      break;
    case 39:   
    case 68:   
      upx = position_x + 5;
      upy = position_y;
      break;
    default: return;
  }
  allow = moveTo(upx,upy);
  if(allow == 1){
    draw(ux,uy,"#FF0000");
    position_x = upx;
    position_y = upy;
  }else if(allow == 2){
    updateRect(0, 0, canvas.width, canvas.height);
    ctxt.font("70px Helvetica");
    ctxt.fillStyle = "Red";
    ctxt.textAlign = "center";
    ctxt.textBaseline = "middle";
    ctxt.fillText("Congratulations!", canvas.width / 2, canvas.height / 2);
    window.removeEventListener("keydown", controls, true);

  }
}
//build(425, 3); 
window.addEventListener("keydown", controls, true);
function moveTo(dx,dy){
  var dataaa = ctxt.getImageData(dx, dy, 15, 15);
  var dataa = dataaa.data;
  var movable = 1;
  for(dx >= 0 &&dx<=size_x-15 && dy >= 0 && dy <= size_y - 15){
    for(var i = 0; i<900; i+=4){
      if(dataa[i] === 0 && dataa[i+1] && dataa[i + 2]=== 0){
        movable = 0;
        break;
      }else if{
        movable = 2;
        break;
      }
    }
  }else{
    movable = 0;
  }
  return movable;
}
build(425,3);

