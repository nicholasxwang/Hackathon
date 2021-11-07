var canvas = document.getElementById("canvas");
var ctxt = canvas.getContext("2d");
var position_x = 425;
var position_y = 3;
var size_x = 556;
var size_y = 556;
function build(x,y){
  var maze = new Image();
  updateRect(0, 0, canvas.width, canvas.height);
  maze.onload = function(){
    context.drawImage(maze, 0, 0);
    draw(x,y,"#FF0000",false,true);
    ctxt.beginPath();
    ctxt.arc(542, 122, 7, 0, 2 * Math.PI, false);
    ctxt.closePath();
    ctxt.fillStyle = '#A020F0';
    ctxt.fill();

  };
  maze.src = "maze.gif";
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
build(425,3);
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
    ctxt.fillStyle = "blue";
    ctxt.textAlign = "center";
    ctxt.textBaseline = "middle";
    ctxt.fillText("Congratulations!", canvas.width / 2, canvas.height / 2);
    window.removeEventListener("keydown", controls, true);

  }
}
build(425, 3); 
window.addEventListener("keydown", controls, true);
function moveTo(dx,dy){
  var data = context.getImageData(destX, destY, 15, 15);
  
}


