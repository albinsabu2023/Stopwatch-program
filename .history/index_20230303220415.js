//canvas api

let can = document.getElementById("canvas");
let context = can.getContext("2d");
context.lineWidth = 10;
context.strokeStyle = "purple";
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(500, 0);
context.moveTo(0, 500);
context.lineTo(0, 250);

context.stroke();
