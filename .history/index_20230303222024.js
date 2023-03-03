//canvas api

//DRAW LINES
// let can = document.getElementById("canvas");
// let context = can.getContext("2d");
// context.lineWidth = 10;
// context.strokeStyle = "purple";
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(500, 0);
// context.moveTo(250, 250);
// context.lineTo(250, 500);

// context.stroke();

//DRAW TRIANGLE
//  <canvas id="canvas" width="500" height="500"></canvas>;
// let can = document.getElementById("canvas");
// let context = can.getContext("2d");
// context.beginPath();
// context.lineWidth = 2;
// context.moveTo(0, 250);
// context.lineTo(250, 0);
// context.lineTo(500, 250);
// context.lineTo(250, 250);
// context.lineTo(0, 250);
// context.fillStyle = "red";
// context.fill();
// context.stroke();

//DRAW RETANGLE
//  <canvas id="canvas" width="500" height="500"></canvas>;
// let can = document.getElementById("canvas");
// let context = can.getContext("2d");
// context.strokeRect(0, 0, 250, 250);

//DRAW CIRCLE

let can = document.getElementById("canvas");
//context.arc(startcord x,startcord y,radius,start angle,end angle,)

let context = can.getContext("2d");

context.arc(250, 250, 100, 0, 2 * Math.PI);
context.fill();
context.lineWidth = 10;
context.strokeStyle = "purple";
context.fillStyle = "cyan";

context.stroke();
