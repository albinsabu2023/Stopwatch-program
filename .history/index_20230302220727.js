//TYPE CONVERSION
//z = String(3.2); //tostring
/// w = Number("3"); //to number
// t = Boolen(""); //by default is false

//CONSTANTS

// const PI = 3.1452; //pi will never changed
// let r;
// let peri;
// r = prompt("enter the radius");
// a = Number(r);
// peri = 2 * PI * a;
// console.log(peri);

//MATH
//provide basic mathematica; functionalities
// let x = 3.14;
// let y = 4.5;
// // let max = Math.max(x, y);
// // let min = Math.min(x, y); //x = Math.round(x); //to round up
// // x = Math.ceil(x);// to round down
// // x = Math.pow(2, 3);//Math.pow(base,expo)
// // x = Math.sqrt(25);
// let pii = Math.PI;

// console.log(pii);

// let a;
// let b;
// let c;
// a = prompt("enter a");
// a = Number(a);
// b = prompt("enter a");
// b = Number(b);
// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log(c);

//recieving from input

//html
//  <label id="alabel">Side A</label>
//     <input type="text" id="atext"><br >
//     <label id="blabel">Side B</label>
//     <input type="text" id="btext"><br>
//     <label id="clabel" >Side C</label>

//     <button type="submit" id="submit">submit</button>
//javascript
// document.getElementById("submit").onclick = function () {
//   a = document.getElementById("atext").value;
//   b = document.getElementById("btext").value;
//   a = Number(a);
//   b = Number(b);
//   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//   document.getElementById("clabel").innerHTML = "side c" + c;
// };

//COUNTER
// let count = 0;
// document.getElementById("dec").onclick = function () {
//   count -= 1;
//   document.getElementById("countlabel").innerHTML = count;
// };
// document.getElementById("inc").onclick = function () {
//   count += 1;
//   document.getElementById("countlabel").innerHTML = count;
// };
// document.getElementById("reset").onclick = function () {
//   count = 0;

//   document.getElementById("countlabel").innerHTML = count;
// };

//RANDOM

// let x = Math.round(Math.random() * 10);
// console.log(x);
// let x=Math.floor(Math.random() *6)
// let y= Math.floor(Math.random() * 6);
// let z = Math.floor(Math.random() * 6);

//STRING
// let a="albin"
// a.length
// a.indexOf("b");
// a.charAt(0)
// a.toUpperCase()
// a.toLowerCase()
// let ph = "32-343-23";
// ph = ph.replaceAll("-", "");
// console.log(ph);
//slice()
// let n = "Albin Sabu";
// let fname = n.slice(0, n.indexOf(" "));
// console.log(fname);

//CHECKBOXXX
{
  /* <label for="check">subscribe</label><br>
    <input type="checkbox" id="check" ></input><br>
    <button id="button"> submit</button> */
}
// document.getElementById("button").onclick = function () {
//   if (document.getElementById("check").checked) {
//     console.log("you are subscribed");
//   } else {
//     console.log("please subscribe");
//   }
// };
//RADIO BUTTON

{
  /* <label for="visablabel">Visa</label><br>
    <input type="radio" name="card" id="visa" ></input><br>
    <label for="masterlabel">Master</label><br>
    <input type="radio" name="card" id="master"></input><br>
    <label for="paypallabel">Paypal</label><br>
    <input type="radio" name="card" id="paypal"></input><br>
    <button id="button"> submit</button> */
}

// const visa = document.getElementById("visa");
// const master = document.getElementById("master");
// document.getElementById("button").onclick = function () {
//   const paypal = document.getElementById("paypal");
//   if (visa.checked) {
//     console.log("visa is selected");
//   } else if (master.checked) {
//     console.log("master is checked");
//   } else if (paypal.checked) {
//     console.log("paypal is selected");
//   } else {
//     console.log("no options selected");
//   }
// };
