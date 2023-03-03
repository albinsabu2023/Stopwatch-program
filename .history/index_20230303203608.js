//canvas api

let can = document.getElementById("canvas");
let context = can.getContext("2d");

context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 500);
context.stroke();
