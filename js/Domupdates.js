// start with event listner for start button that triggers the start of the game, dommanipulation method for putting names on the screen, generates the puzzle and populates it on the screen. Intialize game function.

const player1 = document.querySelector('.player1-name-input');
const player2 = document.querySelector('.player2-name-input');
const player3 = document.querySelector('.player3-name-input');
const startGameButton = document.querySelector('.start-button');
const startScreen = document.querySelector('.start-screen');
const player1Name = document.querySelector('.player1-name');
const player2Name = document.querySelector('.player2-name');
const player3Name = document.querySelector('.player3-name');

startGameButton.addEventListener('click', startGame);

let game;
let puzzle;

function startGame() {
  game = new Game(player1.value, player2.value, player3.value);
  startScreen.classList.add('hidden');
  populatePlayerNames()
}

const resetGameBtn = document.querySelector('.new-game-btn');
resetGameBtn.addEventListener('click', resetGame);

function resetGame() {
  
}

function populatePlayerNames() {
  player1Name.innerText = player1.value;
  player2Name.innerText = player2.value;
  player3Name.innerText = player3.value;
}

const wheelButton = document.querySelector('.wheel-btn');
wheelButton.addEventListener('click', showSpinValue);
const spinValue = document.querySelector('.current-spin-value');

function showSpinValue() {
  spinValue.innerText = 10;
}

const guessLetterInput = document.querySelector('.letter-guess-input');
const letterGuessSubmitButton = document.querySelector('.letter-guess-submit-btn');
letterGuessSubmitButton.addEventListener('click', showLetterGuessed);
const letterA = document.querySelector('.letter-a');
const letterB = document.querySelector('.letter-b');
const letterC = document.querySelector('.letter-c');
const letterD = document.querySelector('.letter-d');
const letterE = document.querySelector('.letter-e');
const letterF = document.querySelector('.letter-f');
const letterG = document.querySelector('.letter-g');
const letterH = document.querySelector('.letter-h');
const letterI = document.querySelector('.letter-i');
const letterJ = document.querySelector('.letter-j');
const letterK = document.querySelector('.letter-k');
const letterL = document.querySelector('.letter-l');

function showLetterGuessed(e) {
  e.preventDefault();
  if(guessLetterInput.value.toLowerCase() === "a") {
    letterA.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "b") {
    letterB.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "c") {
    letterC.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "d") {
    letterD.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "e") {
    letterE.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "f") {
    letterF.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "g") {
    letterG.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "h") {
    letterH.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "i") {
    letterI.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "j") {
    letterJ.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "k") {
    letterK.classList.add('grey-font');
  } else if(guessLetterInput.value.toLowerCase() === "l") {
    letterL.classList.add('grey-font');
  }
}
