var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate(email) {

  if (validateEmail(email)) {
    return true;
  } else {
    return false;
  }
}

$("#email").on("input", validate);

window.onload = function() {  
  var userInput = document.getElementById('email');
    userInput.onkeyup = function() {
      var value = this.value;
      if (validate(value)){
        document.getElementById("bubble").style.display="block";
        document.getElementById("bubble").style.background="rgba(26, 255, 0,0.3)";
      }
}
}