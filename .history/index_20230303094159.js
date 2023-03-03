document.getElementById("submit").onclick = function () {
  var age = document.getElementById("text").ariaValueMax;
  if (age < 18) {
    document.getElementById("label").innerHTML = "youre";
  } else {
    document.getElementById("label").innerHTML = "nop you cant";
  }
  //13else ();
};
