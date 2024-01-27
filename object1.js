// const user = { name: 'test', age: 23 };
// const test1 = Object.create(null);
// console.log(test1);
// const test2 = Object.create({ name: 'test', age: 23 });
// console.log(test2);
// const test3 = new Object();
// test3.name = 'test';
// test3.age = 23;
// console.log(test3);
// const test4 = new Object(null);
// console.log(typeof user);
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }
// console.log(returnedTarget);

// console.log(returnedTarget === target);
// // Expected output: true
// //refrence

// const userDetails = {
//   name: 'test1213',
//   age: 23,
// };
// //const userDetails2 = { ...userDetails };
// const userDetails2 = Object.assign({}, userDetails);
// userDetails2.age = 46;
// console.log(userDetails);
// console.log(userDetails2);
// const person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };

// const me = Object.create(person);
// console.log(me);
// me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// me.isHuman = true;
const object1 = {
  a: 'somestring',
  b: 42,
};
// const [key1, value1] = Object.entries(object1);
// console.log(key1);
// console.log(value1);

//console.log(Object.entries(object1));
console.log(Object.keys(object1));
console.log(Object.values(object1));

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }
const object11 = {
  property1: 42,
};

Object.seal(object11);
object11.property1 = 33;
console.log(object1.property1);
// Expected output: 33
object11.age = 34;
delete object11.property1; // Cannot delete when sealed
console.log(object11.property1);
// Expected output: 33
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42
const user1 = {
  name: 'siva',
  age: 34,
};
console.log(Object.hasOwn(user1, 'name1'));
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas', type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 },
];
const result = Object.groupBy(inventory, ({ type }) => type);
console.log(result);
const persons = [
  { name: 'Sample', type: 'vegetables', quantity: 5 },
  { name: 'Test', type: 'fruit', quantity: 0 },
  { name: 'Sample', type: 'meat', quantity: 23 },
  { name: 'Test', type: 'fruit', quantity: 5 },
  { name: 'Reject', type: 'meat', quantity: 22 },
];
const result1 = Object.groupBy(persons, (person) => person.name);
console.log(result1);
