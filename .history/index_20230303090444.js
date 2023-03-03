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
const s1 = new Student("albin", "21");
console.log(s1);
