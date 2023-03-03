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

//MAP
//--> executes a provided callback function once
//for each element and creates anew array
// let a = [1, 2, 3, 4, 5];
// let squares = a.map(square);
// let cubes = a.map(cube);
// cubes.forEach(print);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

// function print(element) {
//   console.log(element);
// }

//FILTER
//creats a new array with all elements that pass the test provided by a function

let ages = [24, 45, 23, 45, 32, 34, 3, 6];

let arr = ages.filter(checkAge);
arr.forEach(print);
function checkAge(element) {
  return element <= 20;
}
function print(element) {
  console.log(element);
}
