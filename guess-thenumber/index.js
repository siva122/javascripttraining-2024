const formSubmit=document.querySelector('#subt');
const userNumber=document.querySelector('#guessField');
const prevGusses=document.querySelector('.guesses');
const guessRemaining=document.querySelector('.lastResult');
const guesslowOrHi=document.querySelector('.lowOrHi')
let randomNumber=parseInt(Math.random()*100+1);
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let playGame=true;
let prevGussesArray=[];
let noOfGusses=1;
if(playGame){
    formSubmit.addEventListener('click',(event)=>{
  event.preventDefault();
  const guess = parseInt(userNumber.value);
  console.log(guess);
  validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a number')
    }else if(guess <1){
        alert('please enter a number more than one')
    }else if(guess >100){
        alert('please enter a number less than 100')
    }else{
        prevGussesArray.push(guess);
        if(noOfGusses === 11){
            displayGuess(guess);
            displayMessage(`Game is over Random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
      } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
      } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`);
      }
}
function displayMessage(message){
    guesslowOrHi.innerHTML=`<h2>${message}</h2>`
}
function displayGuess(guess){
    userNumber.value='';
    prevGusses.innerHTML+=`${guess}, `;
    noOfGusses++;
    guessRemaining.innerHTML=`${11-noOfGusses}`;
}
function endGame(){
    userNumber.value='';
    userNumber.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    startNewGame();
}
function startNewGame(){
    const newGame=document.querySelector('#newGame');
    newGame.addEventListener('click',()=>{
        randomNumber=parseInt(Math.random()*100+1);
        prevGussesArray=[];
        noOfGusses=1;
        prevGusses.innerHTML='';
        guessRemaining.innerHTML=`${11-noOfGusses}`;
        userNumber.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
}