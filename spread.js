//spread operator ...
//spread means unpack

//spread for array
let fruits1 = ['orange', 'banana', 'lemon', 'apple'];
let fruits2 = ['mango', 'citrus'];
//let finalFruits = [fruits1, fruits2];
let finalFruits = [...fruits1, ...fruits2];
// finalFruits[0][4] = 'sample fruit';
console.log(finalFruits);
console.log(fruits1);

//spread for object
let userDetails = {
  fName: 'siva',
  lName: 'prasad',
  age: 35,
};
let userDetails1 = { ...userDetails, age: 40 };
userDetails1.email = 'siva@example.com';
console.log(userDetails1);
console.log(userDetails);
// let obj = {
//   fName: 'Navin',
//   Age: 35,
//   Address: [{ Street: 'shivaji Nagar ', City: 'Pune', state: 'Maharashtra' }],
// };
// let  {Address}  = obj;
// console.log(Address);
