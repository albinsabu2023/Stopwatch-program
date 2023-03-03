//foreach
//lets make the first lette of every string in an  array to capital
let student = ["albin", "athul", "blessin"];
student.forEach(capitalize);
student.forEach(disp);
function capitalize(elsement, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}
function disp(element) {
  console.log(element);
}
