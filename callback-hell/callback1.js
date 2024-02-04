console.log('start');
// bank scenario
//login with customerId and pwd
//deposit soe amount
//show the full amount
//how many functions 3

//login function

function login(customerId, pwd, cb) {
  setTimeout(() => {
    if (customerId === 'siva123' && pwd === 'random123') {
      let message = `Welcome ${customerId}`;
      cb(message);
    }
  }, 2000);
}

function depositAmount(amount, cb) {
  setTimeout(() => {
    let dptMessage = { cId: '1001', amount: amount };
    cb(dptMessage);
  }, 1000);
}
function showBalance(cId, amount, cb) {
  setTimeout(() => {
    let showBalance = { cId: '1001', balance: amount };
    cb(showBalance);
  }, 500);
}
//callback hell
login('siva123', 'random123', (message) => {
  console.log(message);
  depositAmount(1000, (message) => {
    console.log(message);
    showBalance(message.cId, message.amount, (response) => {
      console.log(response);
    });
  });
});
console.log('end');
