//FOREACH
//lets make the first lette of every string in an  array to capital
// let fruits = ["apple", "orange", "mangoes"];
// fruits.forEach(capitalize);
// fruits.forEach(print);
// function capitalize(element, index, array) {
//   array[index] = element[0].toUpperCase() + element.substring(1);
// }
// function print(element) {
//   console.log(element);
// }

//MAP method //--> executes a provided callback function once
//for each element and creates anew array
let a = [1, 2, 3, 4, 5];
let squares = a.map(square);
squares.forEach(print);
function square(element) {
  return Math.pow(element, 2);
}
function print(element) {
  console.log(element);
}
