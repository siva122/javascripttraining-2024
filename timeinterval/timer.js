console.log('timer');
//settimeinterval webapi browser

let intervalId = setInterval(() => {
  console.log('sample');
}, 1000);
console.log(intervalId);
clearInterval(intervalId);
