console.log("first");
//oops
//class object
// it is a collection of data members and methods
//realword objects
// person car phone cat
//every object having some properties and actions
//phone
//properties
//model storage, bcapacity color-variables
//actions  - function or method  switchon swithoff takephoto
// class <classname> {
//     variablles;
//     methods
// }

class Person {
  constructor(name, age, isActive) {
    console.log(this);
    this.name = name;
    this.age = age;
    this.isActive = isActive;
  }
  getPersonData() {
    return `${this.name}${this.age}${this.isActive}`;
  }
  //getter methods
  //setter methods
  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
  get isActive() {
    return this.isActive;
  }
}

//we need to create objects
const personObj = new Person("ramesh", 33, true);
const personObj1 = new Person("raj", 34, false);
// personObj.age = 45;
// personObj.name = "john";
// personObj.isActive = false;
// console.log(personObj);
// console.log(personObj1);
// console.log(personObj.getPersonData());
// console.log(personObj1.getPersonData());
console.log(personObj.getName);
console.log(personObj.getAge);
// console.log(personObj.isActive);
