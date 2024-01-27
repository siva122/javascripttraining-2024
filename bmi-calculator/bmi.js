console.log('bmi ');
const heightElement = document.querySelector('#height');
const weightElement = document.querySelector('#weight');
const form = document.querySelector('form');
const resultDiv = document.querySelector('#results');
console.log(height);
console.log(weight);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  //   console.log(height.value);
  //   console.log(weight.value);
  //   console.log(height.value + weight.value);
  const height = parseInt(heightElement.value);
  const weight = parseInt(weightElement.value);
  //   console.log(typeof height);
  //   console.log(typeof weight);
  if (height === '' || height < 0 || isNaN(height)) {
    alert('please enter hieght in numbers and >0');
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    alert('please enter weight in numbers and >0');
  }
  //[weight (kg) / height (cm) / height (cm)] x 10,000
  let result = (weight / height / height) * 10000;
  console.log(result.toFixed(2));
  resultDiv.innerHTML = `<span>BMI Result is:${result.toFixed(2)}</span>`;
  heightElement.value = '';
  weightElement.value = '';
});
