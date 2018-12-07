document.querySelector('.start-button').addEventListener('click', startButton);


function startButton() {
  const player1 = document.querySelector('.player1-name-input');
  const player2 = document.querySelector('.player2-name-input');
  const player3 = document.querySelector('.player3-name-input');
  game = new Game(player1.value, player2.value, player3.value);
  domUpdates.startGame();
  domUpdates.populatePlayerNames();
  domUpdates.showPuzzleCategory();
}
