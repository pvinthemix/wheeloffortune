// start with event listner for start button that triggers the start of the game, dommanipulation method for putting names on the screen, generates the puzzle and populates it on the screen. Intialize game function.

const player1 = document.querySelector('.player1-name-input');
const player2 = document.querySelector('.player2-name-input');
const player3 = document.querySelector('.player3-name-input');
const startGameButton = document.querySelector('.start-button');

startGameButton.addEventListener('click', startGame);

let game;

function startGame() {
  game = new Game([player1, player2, player3]);

}