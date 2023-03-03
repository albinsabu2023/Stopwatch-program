//foreach
//lets make the first lette of every string in an  array to capital
let fruits = ["apple", "orange", "mangoes"];
fruits.forEach(capitalize);
fruits.forEach(print);
function capitalize(x, y, z) {
  z[y] = x[0].toUpperCase() + x.substring(1);
}
function print(element) {
  console.log(element);
}
