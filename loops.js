//for while do-while  for-of for-in
let fruits=['apple','banana','orange','pineapple'];
console.log('OUTPUT : ',fruits[0]);
console.log('OUTPUT : ',fruits[1]);
console.log('OUTPUT : ',fruits[5]);
console.log('OUTPUT : ',fruits.length);
//for loop
for (let index = 0; index < fruits.length; index++) {
 console.log('OUTPUT : ',fruits[index]);
    
}
console.log('OUT of the loop');

//while loop
//first initlization
//second condtion
//increment or decrement

//requirement i need to print 10 to 1
// let initValue=10;

// while(initValue>0){
//     console.log('OUTPUT : ',initValue);
//     initValue--;
// }
//do-while
// let initValue=10;
// do{
// console.log('OUTPUT : ',initValue);
// initValue--;
// }while(initValue>0);

//for of
// console.log('for of loop');
// for (const fruit of fruits) {
//     console.log('OUTPUT : ',fruit);
// }
// let students=['siva','renu','naveen','lucky'];

// for (let index = 0; index < students.length; index++) {
//     console.log('OUTPUT : ',students[index]);
    
// }
// for (const student of students) {
//     console.log('OUTPUT : ',student);
// }
console.log('for in loop');
for (const fruit in fruits) {
  console.log('OUTPUT : ',fruits[fruit]);
}

