//shuffle elements of array in javascript

let arr = ["A", "2", "3", "4", "5", "6"];

let array = shuffle(arr);
array.forEach((el) => console.log(el));

function shuffle(arr) {
  let cI = arr.length;
  while (cI != 0) {
    let rI = Math.floor(Math.random() * arr.length);

    let temp = arr[cI];
    arr[cI] = arr[rI];
    arr[rI] = temp;
    cI -= 1;
  }

  return arr;
}
