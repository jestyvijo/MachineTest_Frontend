// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function valid1(){
  email=document.form1.email.value
  password=document.form1.password.value
  if(email=="")
  {
    msg="* Please enter email ID"
    document.getElementById("s1").innerHTML=msg
    return false
  }
  else{
    document.getElementById("s1").innerHTML=""
  }
  if(password=="")
  {
    msg="* Please enter password"
    document.getElementById("s2").innerHTML=msg
    return false
  }
  else{
    document.getElementById("s2").innerHTML=""
  }
}
