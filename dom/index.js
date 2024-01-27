console.log('welcome dom');

//byusing the we can select dom element

const h1Element = document.getElementsByTagName('h1');
console.log(h1Element);
//html collection
//selecting by using the id attribute
const h1idelement = document.getElementById('myId');
console.log('OUTPUT : ', h1idelement);
//selecting by using the class attribute
const h1ClassElement = document.getElementsByClassName('heading');
console.log(h1ClassElement);
//htmlcollection

//queryselector

const pelement = document.querySelector('p');
console.log('OUTPUT : ', pelement);
const h1 = document.querySelector('h1');
console.log('OUTPUT : ', h1);
const h11 = document.querySelectorAll('h1');
console.log(h11);
//nodelist

const para = document.querySelector('.para');
console.log('OUTPUT : ', para);
const para1 = document.querySelector('#myPara');
console.log('OUTPUT : ', para1);

const inputs = document.getElementsByTagName('input');
console.log('OUTPUT : ', inputs);
//html collection
const pwdInput = document.querySelector('input[type=password');
console.log('OUTPUT : ', pwdInput);
const li = document.querySelector('li');
console.log('OUTPUT : ', li);
const li2 = document.querySelector('li:nth-child(2)');
console.log('OUTPUT : ', li2);
const liLstElement = document.querySelector('li:last-child');
console.log('OUTPUT : ', liLstElement);
//   liLstElement.style.backgroundColor='green';
//   liLstElement.style.padding='10px';
//   liLstElement.style.fontSize='24px';
//   liLstElement.setAttribute('id','listItem')
//   liLstElement.setAttribute('class','list-item')

// const allLis = document.querySelectorAll('li');
// console.log('OUTPUT : ', allLis);
// allLis.forEach(function (li) {
//   li.style.backgroundColor = 'red';
//   li.style.padding = '10px';
// });
const liItems = document.getElementsByClassName('list-item');
console.log(liItems);
//we need to convert htmlcollection into array
// Array.from(liItems).map(function (item) {
//   item.style.backgroundColor = 'green';
//   item.style.padding = '10px';
// });
// Array.from(liItems).map((item) => {
//   item.style.backgroundColor = 'green';
//   item.style.padding = '10px';
// });
const h3Element = document.querySelector('h3');
console.log(h3Element);
console.log(h3Element.textContent);
console.log(h3Element.innerHTML);
console.log(h3Element.innerText);
// h3Element.classList.add('sample');
// h3Element.classList.remove('test123');
h3Element.setAttribute('class', 'test123 sample');
h3Element.setAttribute('id', 'myh3Id');
