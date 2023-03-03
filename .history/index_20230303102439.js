//get set idioms
class Student {
  n;
  set setName(name) {
    this.n = name;
  }
  get getName() {
    return this.n;
  }
}
const s1 = new Student();
s1.setName("albin");
console.log(s1.getName);
