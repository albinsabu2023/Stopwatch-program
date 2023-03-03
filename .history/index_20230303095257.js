document.getElementById("submit").onclick = function () {
  var res;
  if (document.getElementById("male").checked) {
    res = "male";
  } else if (document.getElementById("female").checked) {
    res = "female";
  } else if (document.getElementById("others").checked) {
    res = "others";
  } else {
    console.log("please choose any of the categoy");
  }
  document.getElementById(
    "ans"
  ).innerHTML = `thankou for feedback you are male ${res}`;
};
