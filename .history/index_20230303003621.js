//foreach
//lets make the first lette of every string in an  array to capital
let fruits = ["apple", "orange", "mangoes"];
fruits.forEach(capitalize);
fruits.forEach(print);
function capitalize(x, y, z) {
  z[y] = z[0].toUpperCase() + z.substring(1);
}
function print(element) {
  console.log(element);
}
