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
//----------------------------
// let img = document.querySelector("#image");
// let bt = document.querySelector("#button");
// bt.addEventListener("click", () => {
//   if (img.style.display == "none") {
//     img.style.display = "block";
//   } else {
//     img.style.display = "none";
//   }
// });
///or

// let img = document.querySelector("#image");
// let bt = document.querySelector("#button");
// bt.addEventListener("click", () => {
//   if (img.style.visibility == "hidden") {
//     img.style.visibility = "visible";
//   } else {
//     img.style.visibility = "hidden";
//   }
// });

//KEY  LISTNER to move a div

// let x = 0;
// let y = 0;
// const div = document.getElementById("div");
// window.addEventListener("keydown", changePos);
// function changePos(event) {
//   switch (event.key) {
//     case "ArrowDown":
//       y += 5;
//       div.style.top = y + "px";
//       break;
//     case "ArrowUp":
//       y -= 5;
//       div.style.top = y + "px";
//       break;
//     case "ArrowRight":
//       x += 5;
//       div.style.left = x + "px";
//       break;
//     case "ArrowLeft":
//       x -= 5;
//       div.style.left = x + "px";
//       break;
//     default:
//       break;
//   }
// }
const btn = document.getElementById("btn");
const div = document.getElementById("div");
btn.addEventListener("click", begin);
function begin() {
  let x = 0;
  let y = 0;
  let timer = null;
  timer = setInterval(frame, 5);
  function frame() {
    if (x > 200) {
      clearInterval(timer);
    } else {
      x += 1;
      div.style.left = x + "px";
    }
  }
}
