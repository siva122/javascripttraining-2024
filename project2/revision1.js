// console.log("first");
// //rest operator and sparead
// //map filter reduce high order functions

// //rest
// let arr = [1, 2, 3, 4, 4, 5, 6, 7];
// // let num1=arr[0];
// // let num2=arr[1];

// let [first, second, ...rest] = arr;
// console.log(first);
// console.log(second);
// console.log(rest);
// //objects

// let user = {
//   name: "sai",
//   age: 34,
//   isActive: true,
//   address: {
//     city: "hyd",
//     state: "ap",
//     country: "india",
//   },
// };

// const {
//   name: nm,
//   age,
//   address: { city, state },
// } = user;
// console.log(nm, age);
// console.log(city, state);
// //what is the diff between rest and sparead
// //sparead

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [9, 10, 2];
// let result = [...arr1, ...arr2];
// console.log(result);

// let posts = {
//   pid: 1,
//   body: "post one",
// };
// let postCopy = { ...posts, ptype: "mobiles" };
// console.log(postCopy);
// //diff rest and spread

// let getAverage = (uname, ...marksArr) => {
//   //rest function declaration
//   console.log(uname);
//   console.log(marksArr);
// };
// let marks = [10, 20, 30];
// console.log(...marks);
// getAverage(user.name, ...marks); //sparead function calling
// //reduce
// let arr22 = [1, 2, 3, 4, 5];
// //function
// //aarrow function
// let response = arr22.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(response);
//reduce with array of objects
const carts = [
  { pname: "pen", quantity: 2, cost: 10 },
  { pname: "chips", quantity: 3, cost: 50 },
  { pname: "cakes", quantity: 4, cost: 60 },
];
//desired out
//{totalItems:9,totalCost:410}
const totalBill = carts.reduce(
  (total, item) => {
    //let { quantity, cost } = item;
    total.totalItems += item.quantity;
    total.totalCost += item.quantity * item.cost;
    return total;
  },
  {
    totalItems: 0,
    totalCost: 0,
  }
);
console.log(totalBill);

//reduce
const students = [
  { firstName: "John", lastName: "test", age: 36 },
  { firstName: "raj", lastName: "test1", age: 25 },
  { firstName: "hello", lastName: "test2", age: 36 },
  { firstName: "ramesh", lastName: "test3", age: 25 },
  { firstName: "kyle", lastName: "test4", age: 30 },
];
//expected output
//{36:2,25:2,30:1}
let finalResult = students.reduce(function (total, student) {
  if (total[student.age]) {
    total[student.age] = total[student.age] + 1;
  } else {
    total[student.age] = 1;
  }
  return total;
}, {});
console.log(finalResult);
//  const posts=[
//     {topic:'politics',pid:1,body:'postone'},
//     {topic:'movies',pid:2,body:'posttwo'},
//     {topic:'movies',pid:3,body:'postthree'},
//     {topic:'games',pid:4,body:'postfour'},

//  ]
//expected output
//{politics:1,movies:2,games:1}
//{trendingtopic:movies}
//map-filter
//method chaining
const filterResult = students
  .filter((student) => {
    return student.age > 30;
  })
  .map((student) => {
    return student.firstName;
  });
console.log(filterResult);
//['John', 'hello']
//using reduce get the same output
