{
  /* <div class='item'>
  <img width='220' src='images/img-1.jpg' alt='' />
  <div class='details'>
    <h3>Casual Shirt</h3>
    <p></p>
    <div class='price-quantity'>
      <h2>$ $45</h2>
      <div class='buttons'>
        <i class='bi bi-dash-lg'></i>
        <div class='quantity'>0</div>
        <i class='bi bi-plus-lg'></i>
      </div>
    </div>
  </div>
</div>; */
}
let basket = [];
let shop = document.querySelector('#shop');
let shoppingCart = [
  {
    id: 'wdddfsfdf',
    name: 'Casual Shirt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    price: '45',
    img: 'images/img-1.jpg',
  },
  {
    id: 'wsdfdd',
    name: 'Office Shirt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    price: '100',
    img: 'images/img-2.jpg',
  },
  {
    id: 'wddadsd',
    name: 'T Shirt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    price: '25',
    img: 'images/img-3.jpg',
  },
  {
    id: 'wdfdfdfqa',
    name: 'Mens Suit',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    price: '400',
    img: 'images/img-4.jpg',
  },
];
function generateShop() {
  shop.innerHTML = shoppingCart
    .map((item) => {
      let { id, name, desc, price, img } = item;
      return `
    <div id="poruct-id-${id}"class='item'>
  <img width='220' src=${img} alt='' />
  <div class='details'>
    <h3>${name}</h3>
    <p>${desc}</p>
    <div class='price-quantity'>
      <h2>$ ${price}</h2>
      <div class='buttons'>
        <i onclick="decrement('${id}')"class='bi bi-dash-lg'></i>
        <div id=${id} class='quantity'>0</div>
        <i onclick="increment('${id}')"class='bi bi-plus-lg'></i>
      </div>
    </div>
  </div>
</div>
    `;
    })
    .join('');
}
generateShop();
const increment = (id) => {
  console.log('increment', id);
  let findItem = basket.find((item) => item.itemId === id);
  console.log(findItem);
  if (findItem === undefined) {
    basket.push({ itemId: id, itemCount: 1 });
  } else {
    findItem.itemCount += 1;
  }

  console.log('basket', basket);
  update(id);
  calculate();
};

const decrement = (id) => {
  console.log('decrement', id);
  let findItem = basket.find((item) => item.itemId === id);
  console.log('decrement', findItem);
  if (findItem === undefined) {
    return;
  } else if (findItem.itemCount === 0) {
    return;
  } else {
    console.log('elese block');
    findItem.itemCount -= 1;
    console.log(' findItem.itemCount', findItem.itemCount);
    update(id);
    calculate();
  }
};

let update = (id) => {
  let findItem = basket.find((item) => item.itemId === id);
  document.getElementById(id).innerHTML = findItem.itemCount;
};

let calculate = () => {
  let itemCount = basket
    .map((item) => item.itemCount)
    .reduce((acc, curr) => acc + curr, 0);
  document.querySelector('#cartAmount').innerHTML = itemCount;
  console.log(itemCount);
};
