//foreach
//lets make the first lette of every string in an  array to capital
let fruits = ["apple", "orange", "mangoes"];
fruits.forEach(capitalize);
fruits.forEach(print);
function capitalize(element, index, array) {
  array[index] = element[0].toUppercase() + element.subString(1);
}
function print(element) {
  console.log(element);
}
