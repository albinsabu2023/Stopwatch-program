//event handlers addEventlistner
//---------------------------
const innerdiv = document.getElementById("innerdiv");
innerdiv.addEventListener("mouseover", changeRed);
innerdiv.addEventListener("mouseout", changeGreen);
function changeRed() {
  innerdiv.style.backgroundColor = "red";
}

function changeGreen() {
  innerdiv.style.backgroundColor = "lightgreen";
}
