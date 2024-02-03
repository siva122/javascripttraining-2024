console.log('color chaning');
//i need to add event listeners to start button
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
let intervalId;
startBtn.addEventListener('click', changeColor);
//hexcolor
//0-9 AF
function changeColor(event) {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = generateRandomColor();
    }, 1000);
  }
}
//random color generation

//console.log(rNumber);
function generateRandomColor() {
  let finalColor = '#';
  let hexCode = '0123456789ABCDEF';
  for (let index = 0; index < 6; index++) {
    let rNumber = Math.floor(Math.random() * 15);
    finalColor += hexCode[rNumber];
  }
  return finalColor;
}
//console.log(generateRandomColor());
stopBtn.addEventListener('click', removeColor);
function removeColor() {
  clearInterval(intervalId);
  intervalId = null;
}
