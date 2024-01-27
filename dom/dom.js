console.log('welcome dom2');
const parentDiv = document.querySelector('.parent');
console.log(parentDiv);
console.log(parentDiv.children);
const childDivs = Array.from(parentDiv.children);
console.log(childDivs);
// childDivs.forEach((item) => {
//   item.style.color = 'orange';
// });
// childDivs.forEach(function (childDiv) {
//   childDiv.style.color = 'orange';
// });
// const changeColor = (item) => {
//   item.style.color = 'green';
// };
// childDivs.forEach(changeColor);
//function declaration function body
// function sample(){
//     console.log('welcome');
// }
// //calling function
// sample();
const dataOne = document.querySelector('.data');
console.log(dataOne);
console.log(dataOne.parentElement);
console.log(dataOne.nextElementSibling);
// console.log(dataOne.textContent);
// dataOne.classList.add('sample');
// dataOne.innerHTML = 'sample one';
// constdata divs = document.getElementsByClassName('data');
// console.log(divs);
