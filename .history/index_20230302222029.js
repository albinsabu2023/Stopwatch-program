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

let num = 12345.467;
num = num.toLocaleString("en-US", { style: "currency", currency: "USD" });
log(num);
