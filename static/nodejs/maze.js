var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var position_x = 425;
var position_y = 3;
var size_x = 556;
var size_y = 556;
function build(x,y){
  var maze = new Image();
  makeWhite(0, 0, canvas.width, canvas.height);
  maze.onload = function(){
    context.drawImage(maze, 0, 0);
    draw(x,y,"#FF0000",)
  }
}
