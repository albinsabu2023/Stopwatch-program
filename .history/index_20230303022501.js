//shuffle elements of array in javascript

// let arr = ["A", "2", "3", "4", "5", "6"];

// let array = shuffle(arr);
// array.forEach((el) => console.log(el));

// function shuffle(arr) {
//   let cI = arr.length - 1;
//   while (cI != 0) {
//     let rI = Math.floor(Math.random() * arr.length);

//     let temp = arr[cI];
//     arr[cI] = arr[rI];
//     arr[rI] = temp;
//     cI -= 1;
//   }

//   return arr;
// }
//Map --object of key value pare
// const store = new Map([
//   ["t-shirt", 20],
//   ["jeans", 40],
//   ["shirt", 30],
// ]);

// store.forEach((k, y) => console.log(k, y));

//object oriented programming

const car = {
  model: "Mustang",
  color: "red",
  year: 2023,

  drive: function () {
    console.log("driving");
  },
};
console.log(car.drive());
