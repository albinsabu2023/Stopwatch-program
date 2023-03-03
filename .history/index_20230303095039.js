document.getElementById("submit").onclick = function () {
  if (document.getElementById("male").checked) {
    document.getElementById("ans").innerHTML =
      "thankou for feedback you are male";
  } else if (document.getElementById("female").checked) {
    document.getElementById("ans").innerHTML =
      "thankou for feedback you are female";
  } else if (document.getElementById("others").checked) {
    document.getElementById("ans").innerHTML =
      "thankou for feedback you are others";
  } else {
    console.log("please choose any of the categoy");
  }
};
