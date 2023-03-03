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

//setTimeout  //invokes after a millisecond

setTimeout(message1, 2000);

setTimeout(message2, 2000);

setTimeout(message3, 2000);

function message1() {
  console.log("ms1");
}
function message2() {
  console.log("ms2");
}
function message3() {
  console.log("ms3");
}
