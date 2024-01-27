// console.log('elcome event');
// function sample() {
//   console.log('cliked on javascript item');
// }
// function mouseTest() {
//   console.log('mouse is over on apex');
// }
// //newer approach for event handling in js
// //first we need to attach event listners to the element
// const ulElement = document.querySelector('.language');
// ulElement.addEventListener('click', (event) => {
//   console.log(event);
//   console.log(event.type);
//   console.log(event.clientX);
//   console.log(event.clientY);

//   console.log(event.target.innerText);
//   console.log(event.target.nodeName);
// });
const btnElement = document.querySelector('#myButton');
console.log(btnElement);
//we need to add listner to button element
//event type(click,dblclick,keyboard,mouse,scroll,copy)//1st param
//callback function(arrow function,anonymous)//2nd param
//capture mode(event bubleing,event capture)  by default 3rd paramter is false
//by default it is event bubling
// btnElement.addEventListener(
//   'click',
//   (evt) => {
//     console.log(evt.target);
//     console.log(evt.target.nodeName);
//     const ulElement = document.querySelector('.language');
//     const liElement = document.createElement('li');
//     const textdata = document.createTextNode('Ruby');
//     liElement.appendChild(textdata);
//     ulElement.appendChild(liElement);
//   },
//   false
// );
//promise async and await
//will do projects reated to this concept

//modules

//oops
const lijsElement = document.querySelector('.lijs');
console.log(lijsElement);

lijsElement.addEventListener('copy', (event) => {
  console.log(event);
  alert(event.target.textContent);
});
// function test() {
//   alert('apex clicked');
// }
