//event handlers addEventlistner
//---------------------------
const innerdiv = document.getElementById("innerdiv");
const outerdiv = document.getElementById("outerdiv");
innerdiv.addEventListener("click", changeRed);

outerdiv.addEventListener("click", changrBlue);
outerdiv.style.backgroundColor("blue");

function changeRed() {
  this.style.backgroundColor("red");
}
