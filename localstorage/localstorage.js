localStorage.setItem('name', 'Rajesh');
localStorage.setItem('age', 23);
const data = [
  { name: 'Rajesh', age: 23 },
  { name: 'tom', age: 34 },
];
let dataStr = JSON.stringify(data);
console.log(dataStr);
localStorage.setItem('data', dataStr);
//[{"name":"Rajesh","age":23},{"name":"tom","age":34}]
// get data
console.log(localStorage.getItem('name1'));
console.log(localStorage.getItem('age'));
let finalData = JSON.parse(localStorage.getItem('data'));
console.log(finalData);
console.log(finalData[0].name);
//localStorage.clear();
