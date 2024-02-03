console.log('modules');
//use modules concept
//export , import
// 2ways named export ,default export
// import { username, age, add } from './helper.js';
// console.log(username);
// console.log(age);
// console.log(add());
//default export
import add, { username as uname, age } from './helper.js';
console.log(add());
console.log(uname);
console.log(age);
