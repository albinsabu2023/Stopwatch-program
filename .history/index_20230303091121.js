let num = [4, 7, 3, 2, 6, 9];
let sor = num.sort(asc);
function asc(a, b) {
  return b - a;
}
console.log(sor);
