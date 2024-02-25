// console.log("first");
// //objects
// //key-value pair
// //passing dynamic keys and value
// let property = "firstpost";
// let propValue = true;
// const post = {
//   pid: 1,
//   body: "this is postone",
//   posttype: "movies",
//   "i like the post": true,
//   [property]: propValue,
//   getData: function () {
//     console.log(`post result:${this.body}`);
//   },
//   getData1: () => {
//     console.log(`post result:${this.body}`);
//   },
// };

// console.log(post.pid);
// console.log(post.body);
// console.log(post["posttype"]);
// post.isDeleted = true;
// console.log(post["i like the post"]);
// post.getData();
// post.getData1();

// const user = {
//   a: "one",
//   b: "two",
//   a: "three",
// };
// console.log(user);
// //traversing the object  using the loop
// for (const key in post) {
//   console.log(key, post[key]);
// }
// //obj1 reference means address 0x123
// const obj1 = {
//   name: "sai",
//   age: 20,
// };
// //const obj2 = {};
// //obj2 address is same as obj1
// // const obj2 = obj1;
// // obj2.name = "raj";
// // console.log(obj1);
// //copy of object
// //we have three ways to copy the object
// // const str = JSON.stringify(obj1);
// // const finalObj = JSON.parse(str);
// // finalObj.name = "raj";
// // console.log(finalObj);
// // console.log(obj1);
// //second method
// // const obj3 = { ...obj1 };
// // obj3.name = "raj";
// // console.log(obj3);
// // console.log(obj1);
// //third method
// // const obj3 = Object.assign({}, obj1);
// // obj3.name = "raj";
// // console.log(obj3);
// // console.log(obj1);
//functions

//normal function
// function square(num) {
//   return num * num;
// }
// //function call
// let x = 3;
// let result = square(x);
// console.log(result);
//expression function
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));
function add3(x, y, z) {
  return x + y + z;
}
// //es6 arrow functions
// const multiply = (x, y) => x * y;
// console.log(multiply(2, 3));
// //iife functions
// (function add1(x, y) {
//   console.log(x + y);
// })(4, 5);
//callback functions
//function in invoked in aother function
//inbuit callback functions
//setTimeout,map,filter,reduce
function callBackTest(a, callback, callback1) {
  console.log(a, callback(callback1(4, 5, 6), a));
}
callBackTest(4, add, add3);
