//event handlers addEventlistner
//---------------------------
const innerdiv = document.getElementById("innerdiv");
const outerdiv = document.getElementById("outerdiv");
innerdiv.addEventListener("mouseclick", changeRed);

outerdiv.addEventListener("mouseclick", changrBlue);
outerdiv.style.backgroundColor("blue");

function changeRed() {
  this.style.backgroundColor("red");
}
