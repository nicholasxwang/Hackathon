var canvas = document.createElement("canvas");
canvas.innerHTML = "This browser does not support canvas or JavaScript.";
var context = canvas.getContext("2d");

window.onload = function(){  
  var 

  window.onkeydown = function(key){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText(key.keyCode);
  };
};    