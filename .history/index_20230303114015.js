//GET SET IDIOMS
//--------------
// class Student {
//   n;
//   setName(name) {
//     this.n = name;
//   }
//   getName() {
//     return this.n;
//   }
// }
// const s1 = new Student();
// s1.setName("albin");
// console.log(s1.getName());

//Exception handling
//---------------------------

// key words :try, catch ,throw,finally

// try {
//   var a = prompt("enter a number");
//   a = Number(a);
//   if (isNaN(a)) throw "not a num";
//   console.log(a);
// } catch (err) {
//   console.log(`you ve got ${err} error`);
// } finally {
//   console.log("no matter what error");
// }

//setTimeout  //invokes after a millisecond aynchronus fuction

// let timer1 = setTimeout(message1, 1000);
// let timer2 = setTimeout(message2, 1500);
// let timer3 = setTimeout(message3, 2000);

// function message1() {
//   console.log("ms1");
// }
// function message2() {
//   console.log("ms2");
// }
// function message3() {
//   console.log("ms3");
// }

// document.getElementById("button").onclick = function () {
//   clearTimeout(timer1);
//   clearTimeout(timer2);
//   clearTimeout(timer3);
//   alert("you cleared all timeout");
//   message1();
//   message2();
//   message3();
// };

//SET INTERVAL invokes repeatedly after some milliseconds
let count = 0;
let max = 10;
max = Number(max);

let timer = setInterval(counter, 1000);
function counter(count) {
  count += 1;
  console.log(count);
  if (count == 10) {
    clearInterval(timer);
  }
}
