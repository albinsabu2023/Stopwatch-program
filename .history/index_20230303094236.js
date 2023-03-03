document.getElementById("submit").onclick = function () {
  var age = document.getElementById("text").ariaValueMax;
  if (age < 18) {
    document.getElementById("ans").innerHTML = "youre";
  } else {
    document.getElementById("ans").innerHTML = "nop you cant";
  }
  //13else ();
};
