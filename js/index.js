document.querySelector('.start-button').addEventListener('click', startButton);

function startButton() {
  const player1 = document.querySelector('.player1-name-input');
  const player2 = document.querySelector('.player2-name-input');
  const player3 = document.querySelector('.player3-name-input');
  if(player1.value === '') {
    player1.value = 'Player 1'
  } else if (player2.value === '') {
    player2.value = 'Player 2' 
  } else if (player3.value === '') {
    player3.value = 'Player 3'
  };
  game = new Game(player1.value, player2.value, player3.value);
  domUpdates.startGame();
  domUpdates.populatePlayerNames();
  domUpdates.showPuzzleCategory();
}

function changeTurn() {
  game.changeTurn(); //change from player 1 to player 2
  game.changeTurn(); //change from player 2 to player 3
  game.changeTurn(); //change from player 3 back to player 1
}
