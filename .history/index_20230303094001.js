document.getElementById("submit").onclick = function () {
  var age = document.getElementById("text").ariaValueMax;
  age < 18
    ? (document.getElementById("label").innerHTML = "youre")
    : (document.getElementById("label").innerHTML = "nop you cant");
};
