//SCOPE
/** let is limited to block
 *  var is referenced to a function
 * for(var i){
 * }
 * console.log(i) /// ERRROR!!!! cant acces
 *
 */

//locale and options
//  -----------------------
// let num = 1234.56;
// num = num.toLocaleString("en-us"); ///english usa
// console.log(num);
// num = num.toLocaleString("hi-In"); //hindi india
// console.log(num);
// num = num.toLocaleString("de-De"); //standard german
// console.log(num);
//  convert to currency
//  TO CURRENCY
//------------------

// let num = 12345.467;
// num = num.toLocaleString("en-US", { style: "currency", currency: "INR" });
// console.log(num);
//TO UNIT AND PERCENTAGE
//-----------------------------------
// num = num.toLocaleString("undefined", { style: "percentage", });
// num = num.toLocaleString("undefined", { style: "unit",,unit:"celcius" });

//NUMBER GUESSING PROGRAM
{
  /* <h1>Number Guessing Game</h1>
    <p>Pick a number between 1 to 10</p>
    <label>enter a guess</label>
    <input id="guess" type="text"></input>
    <input type="submit" id="submit"></input> */
}
// const ans = Math.floor(Math.random() * 10 + 1);
// let guess = 0;
// document.getElementById("submit").onclick = function () {
//   guess = document.getElementById("guess").value;
//   if (guess == ans) {
//     alert(`${ans} is the number it took ${guess} `);
//   } else if (guess < ans) {
//     console.log("too small");
//   } else if (guess > num) {
//     console.log("too big");
//   }
// };

//TEMPRATURE CONVERTER PROGRAM
{
  /* <h1>temprature converter program</h1><br>
        <label>Enter value</label>
        <input type="text" id="text"></input><br>
        
        <input type="radio"  id="cel" name="temp">Celcius</input><br>
        <input type="radio" id="far" name ="temp">Fahrenheit</input><br>
        <label id="ans"> Choose any converter</label><br>
        <button type="submit" id ="submit">Submit</button> */
}

// document.getElementById("submit").onclick = function () {
//   let temp;

//   if (document.getElementById("cel").checked) {
//     temp = document.getElementById("text").value;
//     temp = Number(temp);
//     let res = toCel(temp);
//     document.getElementById("ans").innerHTML =
//       " you enterd in celcius  is" + res;
//   } else if (document.getElementById("far").checked) {
//     temp = document.getElementById("text").value;
//     temp = Number(temp);
//     let res = toFar(temp);
//     document.getElementById("ans").innerHTML =
//       "you enterd in faranheit  is " + res;
//   } else {
//     document.getElementById("ans").innerHTML = "please choose one";
//   }
// };

// function toCel(temp) {
//   return (temp - 32) * (5 / 9);
// }
// function toFar(temp) {
//   return (temp * 9) / 5 + 32;
// }

//SPREAD OPERATOR
let a = [2, 6, 10, 6, 3, 5, 9];
let max = Math.max(...a);
console.log(max);
for (n in a) {
  console.log(n);
}
