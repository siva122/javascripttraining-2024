console.log('promise allsetteled');

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise1 is success');
  }, 100);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise2 is success');
  }, 100);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise3 is success');
  }, 100);
});

// Promise.all([promise1, promise2, promise3])
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));
// Promise.allSettled([promise1, promise2, promise3]).then((response) =>
//   console.log(response)
// );
//promise.race

// Promise.race([promise1, promise2, promise3])
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));
//promise.any

Promise.any([promise1, promise2, promise3])
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
