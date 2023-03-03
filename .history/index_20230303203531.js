//canvas api

let can = document.getElementById("canvas");
let context = can.getContext("2d");
context.linewidth(10);
context.beginPath();
context.moveTo(250, 0);
context.lineTo(250, 500);
context.stroke();
