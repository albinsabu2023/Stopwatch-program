//canvas api

let can = document.getElementById("canvas");
let context = can.getContext("2d");
context.beginPath();
context.moveTo(250, 0);
context.lineTo(500, 500);
context.stroke();
