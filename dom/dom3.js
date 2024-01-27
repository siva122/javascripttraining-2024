//crfeate a function to add new languages

//first create a new language element  li element
//first select ul element
//append the li to ul element
//this is not optimized approach
function addLanguage(language) {
  const newLi = document.createElement('li');
  newLi.innerHTML = language;
  const ulElement = document.querySelector('.language');
  ulElement.appendChild(newLi);
}
addLanguage('Apex');
addLanguage('Lwc');
//optimized approach
function addLanguage1(language) {
  const newLi = document.createElement('li');
  const textdata = document.createTextNode(language);
  newLi.appendChild(textdata);
  const ulElement = document.querySelector('.language');
  ulElement.appendChild(newLi);
}
addLanguage1('Typescript');
//edit opertion
const secondLi = document.querySelector('li:nth-child(2)');
console.log(secondLi);
const newJvaLi = document.createElement('li');
const javadata = document.createTextNode('Java');
newJvaLi.appendChild(javadata);
console.log(newJvaLi);
secondLi.replaceWith(newJvaLi);
//remove
const lastLi = document.querySelector('li:last-child');
console.log(lastLi);
lastLi.remove();
//event handling
