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

//OBJECT ORIENTED PROGRAMING

// const car = {
//   model: "Mustang",
//   color: "red",
//   year: 2023,

//   drive: function () {
//     console.log("driving");
//   },
// };
// console.log(car.drive());

//THIS keyword

// const car1 = {
//   mode: "model1",
//   color: "red",
//   print: function () {
//     console.log(this.color);
//   },
// };
// const car2 = {
//   mode: "model1",
//   color: "blue",
//   print: function () {
//     console.log(this.color);
//   },
// };

// car1.print();
// car2.print();
// this.name = "helloo";

// console.log(this);

//CLASSES
//---------------------------
// class Player {
//   score = 0;
//   pause() {
//     console.log("you passed the game");
//   }
//   exit() {
//     console.log("you exites the game");
//   }
// }
// const p1 = new Player();
// p1.pause();

///CONSTRUCTORS &&DESTRUCTORSS
// class Student {
//   constructor(nam, age, gpa) {
//     this.nam = nam;
//     this.age = age;
//     this.gpa = gpa;
//     console.log(this.nam + " is studiying");
//   }
// }
// const s1 = new Student("albin", 20, 8.5);
// const s2 = new Student("athul", 21, 9.5);
// console.log(s2);

//STATIC
//static bleongs to class not to object
// class Car {
//   static noOfCars = 0;
//   //noOfCars = Number(noOfCars);
//   constructor(model) {
//     this.model = model;
//     this.noOfCars += 1;
//   }
// }
// const c1 = new Car("benz");
// const c2 = new Car("ferrari");
// const c3 = new Car("alto");
// const c4 = new Car("honda");
// console.log(c1.noOfCars);

//INHERITENCE

class Animal {
  alive = "true";
  eat() {
    console.log("eating");
  }
}
class Rabbit extends Animal {
  name = "rabbit";
  run() {
    console.log("running");
  }
}

const r = new Rabbit();
console.log(r.run());
