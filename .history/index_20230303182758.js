//event handlers addEventlistner
//---------------------------
const innerdiv = document.getElementById("innerdiv");
const outerdiv = document.getElementById("outerdiv");
innerdiv.addEventListener("click", changeRed);

outerdiv.addEventListener("click", changeRed);
outerdiv.style.backgroundColor = "red";

function changeRed() {
  this.style.backgroundColor = "red";
}
