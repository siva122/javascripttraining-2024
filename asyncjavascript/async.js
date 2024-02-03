//console.log('async');
console.log('start');
setTimeout(() => {
  console.log('test');
}, 2000);
setTimeout(() => {
  console.log('test12');
}, 2000);
console.log('end');
//event loop
