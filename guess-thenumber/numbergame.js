console.log('number guess game');
let randomNumber;
const form = document.querySelector('form');
const userNumber = document.querySelector('#guessField');
const gusses = document.querySelector('.guesses');
const result = document.querySelector('.lastResult');
const displayMsg = document.querySelector('.lowOrHi');
let resultSection = document.querySelector('.resultParas');
let p = document.createElement('p');
let prevGuess = [];
let noOfGusses = 1;
let playGame = true;
if (playGame) {
  form.addEventListener('submit', (evt) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    event.preventDefault();
    let guess = parseInt(userNumber.value);
    console.log(randomNumber);
    console.log(guess, typeof guess);
    validateGuess(guess);
  });
}

//validation
function validateGuess(guess) {
  if (guess < 1) {
    alert('Please enter a valid guess >0');
  } else if (guess > 100) {
    alert('Please enter guess less than 100');
  } else if (isNaN(guess)) {
    alert('Please enter a guess in numbers');
  } else {
    gusses.push(guess);
    if (noOfGusses == 11) {
      displayGuess(guess);
      displayMessage(`final random number is${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`guess is matched with random number`);
  } else if (guess < randomNumber) {
    displayMessage(`guess is less than random number`);
  } else if (guess > randomNumber) {
    displayMessage(`guess is greater than random number`);
  }
}
function displayGuess(guess) {
  userNumber.value = '';
  gusses.innerHTML += `${guess},`;
  noOfGusses++;
  result.innerHTML = `${11 - noOfGusses}`;
}
function displayMessage(message) {
  displayMsg.innerHTML = `<span>${message}</span>`;
}
function endGame() {
  userNumber.value = '';
  userNumber.setAttribute('disabled', '');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  resultSection.appendChild(p);
  playGame = false;
  startGame();
}
function startGame() {
  playGame = true;
  userNumber.removeAttribute('disabled');
  randomNumber = parseInt(Math.random() * 100 + 1);
}
