console.log('object');
//object  key value pair data structure
// let user = {
//   name: 'John',
//   age: 36,
//   email: 'john@example.com',
//   'like my class': 'best',
// };
// console.log(user);
// // // console.log(user.name);
// // // console.log(user.age);
// console.log(user.email);
// console.log(user['like my class']);
// console.log(user['age']);

// console.log(typeof user);
// let fname = 'fname123';
// let value = 'smith';
// let x = [10, 20, 30, 40];
// const fbuser = {
//   [fname]: value,
//   age: 36,
// };
// console.log(fbuser);
// for (let key in fbuser) {
//   console.log(fbuser[key]);
// }
// for (const [key, value] of fbuser) {
//   console.log(key);
// }

// const fbuser = {
//   name: 'fname123',
//   age: 36,
//   isRegister: function () {
//     console.log('register done');
//   },
//   isLogin: () => {
//     console.log('login done');
//   },
// };
// fbuser.isRegister();
// fbuser.isLogin();
// let fname = 'fname123';
// let value = 'smith';
// let x = [10, 20, 30, 40];
// const fbuser = {
//   [fname]: value,
//   age: 36,
// };
// console.log(Object.keys(fbuser));

// for (const key in fbuser) {
//   console.log(fbuser[key]);
// }
// console.log(Object.entries(fbuser));
// for (const [key, value] of Object.entries(fbuser)) {
//   console.log(key, value);
// }
//object destructure

let userDetails = {
  fName: 'siva',
  lName: 'prasad',
  age: 35,
  address: {
    city: 'chennai',
    state: 'tamilnadu',
    country: 'india',
  },
};
// console.log(userDetails);
// console.log(userDetails.age);
// console.log();
// console.log(userDetails.address.city);
// console.log(userDetails.address['state']);
let firstName = userDetails['fName'];
let userAge = userDetails.age;
//object destructure

let {
  fName: firstname,
  lName,
  age,
  email,
  address: { city, state },
} = userDetails;
console.log(firstname, lName, age, city, state, email);
// array destructure
