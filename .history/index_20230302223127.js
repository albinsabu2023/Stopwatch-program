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

const ans = Math.floor(Math.random() * 10 + 1);
let guess = 0;
document.getElementById("submit").onclick = function () {
  guess = document.getElementById("guess").value;
  if (guess == ans) {
    alert(`$(ans) is the `);
  }
};
