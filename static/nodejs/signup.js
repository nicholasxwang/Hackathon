
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


window.onload = function() {  
  var userInput = document.getElementById('email').value;
    userInput.onkeyup = function() {
      var value = this.value;
      if (validate(value)){
        document.getElementById("bubble").style.display="block";
        document.getElementById("bubble2").style.display="none";
        document.getElementById("bubble2").value = "Message: Valid Email!"
      }else{
        document.getElementById("bubble2").style.display="block";
        document.getElementById("bubble").style.display="none";
        document.getElementById("bubble2").value = "Message: Invalid Email!"
      }
}
}