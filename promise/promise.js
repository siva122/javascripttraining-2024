console.log('promise');
const pr = new Promise((res, rej) => {
  setTimeout(() => {
    let isTrue = false;
    if (isTrue) {
      res({ uid: 123, age: 30 });
    } else {
      rej('process failure');
    }
  }, 2000);
});
//console.log(pr);
pr.then((response) => {
  console.log(response);
  response.email = 'siva123@gmail.com';
  return response;
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

//async await
