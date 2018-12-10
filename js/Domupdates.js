let game;
let puzzle;

// domUpdates Object
let domUpdates = {
  // NOTE: setting up key-value pairs for querySelectors 
  player1Name: document.querySelector('.player1-name'),
  player2Name: document.querySelector('.player2-name'),
  player3Name: document.querySelector('.player3-name'),
  player1Input: document.querySelector('.player1-name-input'),
  player2Input: document.querySelector('.player2-name-input'),
  player3Input: document.querySelector('.player3-name-input'),
  startScreen: document.querySelector('.start-screen'),

  startGame() {
    this.startScreen.classList.add('hidden');
  },

  quitGame() {
    game.quitGame();
    this.player1Name.innerText = 'Player 1';
    this.player2Name.innerText = 'Player 2';
    this.player3Name.innerText = 'Player 3';
    this.player1Input.value = '';
    this.player2Input.value = '';
    this.player3Input.value = '';
    this.startScreen.classList.remove('hidden');
  },
  
  resetGame() {

  },

  buyVowel() {
    const buyVowelScreen = document.querySelector('.buyvowel-screen');
    const guessVowelBtn = document.querySelector('.guess-vowel-btn');
    guessVowelBtn.addEventListener('click', () => {
      event.preventDefault();
      buyVowelScreen.classList.add('hidden')
    })
    buyVowelScreen.classList.remove('hidden');
  },

  // solvePuzzle() {
  //   let inGameSolvePuzzleBtn = document.querySelector('.solve-puzzle-btn');
  //   let popupSolvePuzzleBtn = document.querySelector('.solvepuzzle-btn');
  // }
  
  populatePlayerNames() {
    this.player1Name.innerText = this.capitalizeFirstLetter(this.player1Input.value);
    this.player2Name.innerText = this.capitalizeFirstLetter(this.player2Input.value);
    this.player3Name.innerText = this.capitalizeFirstLetter(this.player3Input.value);
  },

  capitalizeFirstLetter(input) {
    let result = input.trim().toLowerCase();
    return result[0].toUpperCase() + result.substring(1);
  },

  showSpinValue() {
    const spinValue = document.querySelector('.current-spin-value');
    spinValue.innerText = 10;
  },

  showPuzzleCategory() {
    const puzzleCategoryOutput = document.querySelector('.puzzle-category-name')
    const round1PuzzleCategory = game.fivePuzzles[0].currentPuzzle.category;
    puzzleCategoryOutput.innerText = round1PuzzleCategory;
  },

  // showLetterGuessed(e) {
  //   e.preventDefault();
  //   const alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  //   const alphabetObj = alphabetArray.reduce((obj, currentLetter) => {
  //     obj[currentLetter] = document.querySelector(`.letter-${currentLetter}`);
  //     return obj;s
  //   }, {});
  //   //for guess a letter input box, can't be a vowel
  //  const guessLetterInput = document.querySelector('.letter-guess-input').value.toLowerCase().trim();

  //   alphabetObj[guessLetterInput].classList.add('grey-font');
  // },

  showLetterGuessed(e) {
    e.preventDefault();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const guessLetterInput = document.querySelector('.letter-guess-input').value.toLowerCase().trim();
    
    if (vowels.includes(guessLetterInput)) {
      // TODO: change UI to some message instead of alert
      alert('PLEASE ENTER A CONSONANT!!!');
    } else {
      this.greyOut(guessLetterInput);
    }
  },

  greyOut(letter) {
    document.querySelector(`.letter-${letter}`).classList.add('grey-font');
  },
};

// *Event Listeners*
document.querySelector('.reset-game-btn').addEventListener('click', domUpdates.resetGame);
document.querySelector('.quit-game-btn').addEventListener('click', domUpdates.quitGame.bind(domUpdates));
// NOTE: 
  // If we used ES5 syntax without binding, this would refer to the HTML button element (where it was called)
  // If we used ES6 arrow syntax, this would refer to the global window object
document.querySelector('.wheel-btn').addEventListener('click', domUpdates.showSpinValue);
document.querySelector('.letter-guess-submit-btn').addEventListener('click', domUpdates.showLetterGuessed.bind(domUpdates));
document.querySelector('.buy-vowel-btn').addEventListener('click', domUpdates.buyVowel);


