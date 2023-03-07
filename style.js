// Define variables
let answer = Math.floor(Math.random() * 100) + 1;
let chances = 5;
let guesses = [];

// Get HTML elements
let guessInput = document.getElementById("guess");
let resultText = document.getElementById("result");
let chancesText = document.getElementById("chances");
let resetButton = document.querySelector("button[type=reset]");

// Initialize game state
chancesText.textContent = chances;

// Check if guess is valid and update game state
function checkGuess() {
  let guess = parseInt(guessInput.value);

  if (guess < 1 || guess > 100) {
    resultText.textContent = "1~100까지의 숫자 하나를 입력하세요.";
    return;
  }

  if (guesses.includes(guess)) {
    resultText.textContent = "이미 사용된 숫자 입니다.";
    return;
  }

  guesses.push(guess);
  chances--;

  if (guess < answer) {
    resultText.textContent = "Up!";
  } else if (guess > answer) {
    resultText.textContent = "Down!";
  } else {
    resultText.textContent = "That's right!";
    guessInput.disabled = true;
    resetButton.disabled = false;
  }

  chancesText.textContent = chances;

  if (chances === 0) {
    resultText.textContent = "Game over. The answer was " + answer + ".";
    guessInput.disabled = true;
    resetButton.disabled = false;
  }
}

// Reset game state
function resetGame() {
  answer = Math.floor(Math.random() * 100) + 1;
  chances = 5;
  guesses = [];
  guessInput.value = "";
  guessInput.disabled = false;
  resultText.textContent = "";
  chancesText.textContent = chances;
  resetButton.disabled = true;
}
