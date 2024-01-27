//rest operator ...
//packing elements
//when we use functions in function declaration if we use ... it is know as rest operator.i function calling if we use ... it is known as spread operator
//using arrays
// let fruits1 = ['orange', 'banana', 'lemon', 'apple'];

// //using rest

// let [f1, , f2, ...remainingFruits] = fruits1;
// console.log(f1, f2, remainingFruits);

//object using rest
// let userDetails = {
//   fName: 'siva',
//   lName: 'prasad',
//   age: 35,
// };

// let newObj = userDetails;
//rest using in functions

function calcAverage(name, ...marks) {
  //function declaration or body
  console.log(name, marks);
  let result = 0;
  for (let index = 0; index < marks.length; index++) {
    result += marks[index];
  }
  console.log(result / marks.length);
}
let marks = [56, 67, 89];
calcAverage('siva', ...marks); // function calling
// let marks1= function{
//     return
//     [56,57,58]
// }
//rest on object
let userDetails = {
  fName: 'siva',
  lName: 'prasad',
  age: 35,
};
console.log(userDetails);

const { age, ...obj1 } = userDetails;
console.log(age, obj1);
