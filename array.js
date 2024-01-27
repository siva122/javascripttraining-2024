// let fruits = ['orange', 'banana', 'lemon', 'apple', { name: 'siva', age: 20 }];
// let str1 = [1, 'test', true];
// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// let fruit3 = fruits[2];
// let fruit4 = fruits[3];

// // console.log(fruit1, fruit2, fruit3, fruit4);
// //array destructure

// //let [f1, f2, f3, f4] = fruits;
// let [f1, , , f4, { age, name }] = fruits;

// console.log(f1, f4, age, name);
let arr1 = [10, 20, 30, 40];

// for (let index = 0; index < arr1.length; index++) {
//   console.log(arr1[index]);
// }
let sum = 0;
let result = 0;
// arr1.forEach(function (item) {
//   sum = sum + item;
// });
// console.log(sum);
//second wway using arrow function

// arr1.forEach((item) => (sum += item));
// console.log(sum);
//third eay
// function sum1(item) {
//   sum += item;
// }
// arr1.forEach(sum1);
// console.log(sum);
//map function

const array1 = [1, 4, 9, 16];
const resultt = array1.map(function (item) {
  return item + 2;
});
console.log(resultt);
//using arrow function
const response = array1.map((item) => item * 2);
console.log(response);
function double(item) {
  return item * 2;
}
const response1 = array1.map(double);
console.log(response1);
//
const fbUsers = [
  { name: 'siva', age: 35, comments: 100 },
  { name: 'raj', age: 45, comments: 200 },
  { name: 'rajesh', age: 45, comments: 300 },
];

// const response3 = fbUsers.map((user) => {
//   if (user.comments > 100) {
//     user.rating = 5;
//   }
//   return user;
//   //   return user.comments > 100 ? (user.rating = 5) : user;
// });
// console.log(response3);
//filter
const response4 = fbUsers.filter((user) => {
  let { comments: comment } = user;
  return comment > 100;
});
console.log(response4);
//reduce
const array2 = [1, 4, 9, 16];
let response6 = array2.reduce(
  (total, currentItem) => (total += currentItem),
  0
);
console.log(response6);
//reduce

// const cart = [
//   { productname: 'apple15', price: 70000, quantity: 2 },
//   { productname: 'samsung15', price: 60000, quantity: 3 },
//   { productname: 'appo15', price: 25000, quantity: 3 },
//   { productname: 'oneplues12', price: 50000, quantity: 2 },
// ];
// //final output {totalproducts:10 ,totalBill:121213123}

// let response10 = cart.reduce(
//   (total, item) => {
//     let { price, quantity } = item;
//     total.totalProducts += quantity;
//     total.totalBill += price;
//     return total;
//   },
//   { totalProducts: 0, totalBill: 0 }
// );
// console.log(response10);
//reduce

let students = [
  { name: 'siva', age: 26, email: 'siva#gmail.com', marks: 45 },
  { name: 'sai', age: 34, email: 'sai#gmail.com', marks: 70 },
  { name: 'rajesh', age: 36, email: 'rajesh#gmail.com', marks: 90 },
  { name: 'ram', age: 26, email: 'ram#gmail.com', marks: 40 },
];
//output {26:2,34:1,36:1}
// let response13 = students.reduce((total, student) => {
//   let { age } = student;
//   if (total[age]) {
//     total[age] += 1;
//   } else {
//     total[age] = 1;
//   }
//   return total;
// }, {});
// console.log(response13);
//chaining concept  map filter reduce
let response33 = students
  .filter((item) => item.marks < 50)
  .map((item) => {
    item.marks += 15;
    return item;
  });
console.log(response33);

// let response89 = response33.map((item) => {
//   item.marks = item.marks + 15;
//   return item;
// });
// console.log(response89);
let students1 = [
  { name: 'siva', age: 26, email: 'siva#gmail.com', marks: 45 },
  { name: 'sai', age: 34, email: 'sai#gmail.com', marks: 70 },
  { name: 'rajesh', age: 36, email: 'rajesh#gmail.com', marks: 90 },
  { name: 'ram', age: 26, email: 'ram#gmail.com', marks: 40 },
];
//output is [siva,ram]
const response99 = students1
  .filter((student) => student.marks < 50)
  .reduce((total, item) => {
    total.push(item.name);
    return total;
  }, []);
console.log(response99);
