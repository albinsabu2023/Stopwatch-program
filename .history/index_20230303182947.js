//event handlers addEventlistner
//---------------------------
const innerdiv = document.getElementById("innerdiv");
const outerdiv = document.getElementById("outerdiv");
innerdiv.addEventListener("click", changeRed);

outerdiv.addEventListener("click", changeRed);

function changeRed() {
  alert(`you selected ${this.div}`);
  this.style.backgroundColor = "red";
}
