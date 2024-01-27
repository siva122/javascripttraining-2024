//template literals concept

let a = 100;
let b = 200;
//let result = 'result is:' + (a + b);
let result = `result of ${a} and ${b} value is: ${a + b}`;
console.log(result);

let user = {
  name: 'siva',
  age: 34,
};

function showUser({ name, age }) {
  return `user name is ${name} and age is ${age}`;
}
console.log(showUser(user));
