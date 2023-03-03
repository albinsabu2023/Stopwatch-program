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
try {
  var a = prompt("enter a number");
  a = Number(a);
  if (isNaN(a)) throw "not a num";
  console.log(a);
} catch (err) {
  console.log(`you ve got ${err}`);
}
