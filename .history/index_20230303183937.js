//event handlers addEventlistner
//---------------------------
// const innerdiv = document.getElementById("innerdiv");
// const outerdiv = document.getElementById("outerdiv");
// innerdiv.addEventListener("click", changeRed);

// outerdiv.addEventListener("click", changeRed);

// function changeRed() {
//   alert(`you selected ${this.id}`);
//   this.style.backgroundColor = "red";
// }

//toggle the image using a button
let img = document.querySelector("#image");
let bt = document.querySelector("#button");
bt.addEventListener("click", () => {
  if (img.style.display == hidden) {
    img.style.display = "block";
  } else {
    img.style.display = "hidden";
  }
});
