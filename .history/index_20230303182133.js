//event handlers addEventlistner
//---------------------------
const innerdiv = document.getElementById("innerdiv");
innerdiv.addEventListener("mouseover", changeRed);

function changeRed() {
  innerdiv.style.backgroundColor = "red";
}
