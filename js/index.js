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


function populatePlayerNames() {
  player1Name.innerText = player1.value;
  player2Name.innerText = player2.value;
  player3Name.innerText = player3.value;
}
