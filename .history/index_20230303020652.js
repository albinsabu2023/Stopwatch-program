//shuffle elements of array in javascript

let arr = ["A", "2", "3", "4", "5", "6"];

shuffle(arr);
arr.forEach((el) => console.log(el));

function shuffle(arr) {
  let rI = Math.floor(Math.random() * arr.length);
  let cI = arr.length;
  while(cI!-=0){
      
        cI -= 1;
        let temp = arr[cI];
        arr[cI] = arr[rI];
        arr[rI] = arr[cI];
  }

  return arr;
}
