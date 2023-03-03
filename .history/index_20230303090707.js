//super keyword ///refers to parent class
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log("hello" + name + "you are" + age + "years old");
  }
}
class Rep extends Student {
  r = rollno;
  leading() {
    console.log("you are the rep");
  }
}
const s1 = new Student("albin", "21");
console.log(s1);
const r = new Rep();
r.name("adithya");
r.rollno(10);
r.leading();
