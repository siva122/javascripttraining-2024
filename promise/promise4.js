console.log('start');

// const promise1 = new Promise(function (resolve, reject) {
//   console.log('test');
//   resolve('sample');
//   console.log('test12');
// });
// promise1.then((result) => {
//   console.log(result);
// });
const fn = () =>
  new Promise(function (resolve, reject) {
    console.log('test');
    resolve('sample');
  });
fn().then((data) => {
  console.log(data);
});
console.log('end');
