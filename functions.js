//functions
//method
//oop
//function defition or declaration
// function addIntgers(num1, num2, num3) {
//   //parameters
//   let result;
//   //   if (num1 > 0 && num2 > 0 && num3 > 0) {
//   //     result = num1 + num2 + num3;
//   //   } else {
//   //     console.error('please provide the number');
//   //   }
//   if (
//     typeof num1 === 'number' &&
//     typeof num2 === 'number' &&
//     typeof num3 === 'number'
//   ) {
//     result = num1 + num2 + num3;
//     console.log(result);
//   } else {
//     console.error('please provide the numbers');
//   }
// }

// //call the function
// addIntgers(10, 20, 30);
// addIntgers(100, 200, 300); //arguments
// //arguments
// addIntgers(10, 20, 30); //arguments

// function multiply(x, y) {
//   return x * y;
// }

// let result = multiply(10, 20);
// console.log(result);
// console.log(multiply(10, 20));
// //function expression

// let multiply1 = function (x, y) {
//   return x * y;
// };
// console.log(multiply1(4, 20));
// let multiply2 = function (x, y) {
//   console.log(x * y);
// };

// multiply2(20, 40);

// //arrow functions
// let multiply3 = (x, y) => x * y;
// let response = multiply3(10, 4);
// console.log(response);

// let concatStrings = (str1, str2) => str1 + str2;
// console.log(concatStrings('welcome', 'js'));
// //deep dive into functions

// function sampleValue() {
//   console.log(arguments);
//   let sum = 0;
//   for (let index = 0; index < arguments.length; index++) {
//     sum += arguments[index];
//   }
//   return sum;
// }
// let result1 = sampleValue(10, 20, 40, 50);
// console.log(result1);

// //function with spread or rest operator

// function sampleTest(param1, param2, ...args) {
//   //rest
//   10, 20, (30)[(10, 20, 30)];
//   console.log(param1, param2, args);
// }

// sampleTest(100, 200, ...[10, 20, 30]); //spread
//first class function

// function subtract1(a, b) {
//   return a - b;
// }
// function anotherTest(x, y) {
//   return subtract1(x, y);
// }
// let result6 = anotherTest(100, 30);
// console.log(result6);
// let subtract1 = 100;
// function subtract1(a, b) {
//   return a - b;
// }
// function anotherTest(num1, cb, x, y) {
//   console.log(cb, x, y, num1);
//   return cb(x, y);
// }
// let result6 = anotherTest(subtract1, 100, 40);
// console.log(result6);

//task one
//create a register function with uname,email,pwd use this function to another function named as facebookregister
// function reigster(uname, email, pwd) {
//   return (
//     uname + ' ' + 'with email' + ' ' + email + ' ' + 'successfully registerd'
//   );
// }
// function facebookRegister(reigster, uname, email, pwd) {
//   return reigster(uname, email, pwd);
// }
// let uname = 'srikanth';
// let email = 'srikanth@gmail.com';
// let pwd = 'srikanth123';
// let result10 = facebookRegister(reigster, uname, email, pwd);
// console.log(result10);
// //what is callback function

// console.log('start');
// setTimeout(() => {
//   console.log('do something');
// }, 0);
// console.log('end');
// function callbackFunction() {
//   console.log('callback exection completed');
// }
// function doSomething(cb) {
//   for (let i = 0; i < 1000; i++) {
//     console.log('first');
//   }
//   cb();
// }
// doSomething(callbackFunction);
// const test = function () {
//   console.log('test');
// };
// test();
//IIFE  in javascript  Immediate Invoke Function Expression

// (function test() {
//   console.log('first');
// })();
// (function test(x) {
//   console.log('first', x);
// })(5);
//arrow function
// let sample = (x) => {
//   console.log(x + y);
// };
// sample(10);
