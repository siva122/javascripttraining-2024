console.log('create element');
const divElement = document.createElement('div');
console.log(divElement);
divElement.textContent = 'this is sample div';
divElement.style.backgroundColor = 'green';
divElement.style.padding = '12px';
document.body.appendChild(divElement);
//i need to add paragraph for created divelement
//first we need to create a paragraph element
//add this paragraph element to divelement

const newPara = document.createElement('p');
newPara.innerHTML = 'this is sample para';
console.log(newPara);
divElement.appendChild(newPara);
//first you need to create ul element
//after that you need to add three li elements to ul element
//after that add ul element to body element
