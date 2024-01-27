console.log('event handling in depth');
// const owlElemnt = document.querySelector('#owl');
// owlElemnt.addEventListener(
//   'click',
//   (evt) => {
//     console.log(evt);
//     console.log('owl clicked');
//     // evt.stopPropagation();
//     // alert('owl clicked');
//   },
//   true
// );
// const parentUl = document.querySelector('#images');

// parentUl.addEventListener(
//   'click',
//   () => {
//     console.log('cliked inside ul');
//   },
//   true
// );
// //by default is event bubbleing means follows bottom to top approach
// const div = document.querySelector('#divid');
// div.addEventListener(
//   'click',
//   () => {
//     console.log('clciked div');
//   },
//   true
// );
// event captureing from top to bottom
const anchorElement = document.querySelector('#google');
anchorElement.addEventListener('click', (evt) => {
  console.log('cliked google anchor');
  console.log(evt.target);
  event.preventDefault();
});

// const owlElemnt = document.querySelector('#owl');
// owlElemnt.addEventListener('click', (event) => {
//   event.target.remove();
// });

// const prayerElemnt = document.querySelector('#prayer');
// prayerElemnt.addEventListener('click', (event) => {
//   event.target.remove();
// });
const ulElment = document.querySelector('#images');
console.log(ulElment);
ulElment.addEventListener('click', (event) => {
  //console.log(event);
  // console.log(event.target);
  //console.log(event.target.parentNode);
  //console.log(event.target.tagName);
  if (event.target.tagName === 'IMG') {
    const parentLi = event.target.parentNode;
    console.log(parentLi.parentNode.parentNode);
    parentLi.remove();
  }
});
