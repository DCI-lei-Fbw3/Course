let roundCount = 0;
let solution = Math.ceil(Math.random() * 10);
let playerGuess;

getGuess();
checkWin();

function getGuess() {
  playerGuess = parseInt(
    window.prompt(
      roundCount > 0 ? "Wrong! Try again." : "Guess a number from 1-10"
    )
  );
}

function checkWin() {
  roundCount++;
  if (playerGuess === solution) {
    window.alert(
      `Success! You guessed the number ${solution} in ${roundCount} turns`
    );
  } else if (roundCount === 3) {
    window.alert(
      `Sorry, you failed to guess the number in three rounds. The answer was ${solution}.`
    );
  } else if (playerGuess != solution) {
    getGuess();
    checkWin();
  }
}
