console.log('timeout');
//settimeout it is part of webapi browser
//callbacks
//time in milliseconds
let timerId = setTimeout(() => {
  console.log('sample');
}, 5000);
console.log(timerId);
clearTimeout(timerId);
