const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
const cart = [
  { productname: 'apple15', price: 7, quantity: 2 },
  { productname: 'samsung15', price: 6, quantity: 3 },
  { productname: 'appo15', price: 2, quantity: 3 },
  { productname: 'oneplues12', price: 5, quantity: 2 },
];
const { productname: pname, price } = cart.find((item) => item.price > 5);
console.log(pname, price);
const array2 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

//console.log(array2.findIndex((item) => item > 13));
console.log(
  array2.findIndex(function (item) {
    return item > 13;
  })
);
console.log(array2.findIndex(isLargeNumber));

const array3 = [1, 2, 3];

console.log(array3.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
const cardNumber = ['1234', '4567', '7899'];
console.log(cardNumber.join('-'));
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo', 2));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
const isBelowThreshold = (currentValue) => currentValue < 40;

const array11 = [1, 30, 39, 29, 10, 13];

console.log(array11.every(isBelowThreshold));
// Expected output: true
const animals1 = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals1.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals1.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals1.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals1.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals1.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals1.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May', 'Mayy');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
const array111 = [1, 2, 3];

const firstElement = array111.shift();

console.log(array111);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1
const array12 = [1, 2, 3];

console.log(array12.unshift(4, 5));
// Expected output: 5

console.log(array12);
// Expected output: Array [4, 5, 1, 2, 3]
