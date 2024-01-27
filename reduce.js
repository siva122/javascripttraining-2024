const array2 = [1, 4, 9, 16];
// return value is single ,single value,[],{}
//result 30

let response = array2.reduce((initVal, currVal) => initVal + currVal);
console.log(response);
const cart = [
  { productname: 'apple15', price: 7, quantity: 2 },
  { productname: 'samsung15', price: 6, quantity: 3 },
  { productname: 'appo15', price: 2, quantity: 3 },
  { productname: 'oneplues12', price: 5, quantity: 2 },
];
//14 +18 + 6+10
//final output {totalproducts:10 ,totalBill:48}
let { totalProducts, totalBill } = cart.reduce(
  (initVal, currVal) => {
    let { price, quantity } = currVal;
    let { totalProducts, totalBill } = initVal;
    console.log(price, quantity, totalProducts, totalBill);
    totalProducts = totalProducts + quantity;
    totalBill = price * quantity + totalBill;
    return { totalProducts, totalBill };
  },
  { totalProducts: 0, totalBill: 0 }
);
console.log(totalProducts, totalBill);
