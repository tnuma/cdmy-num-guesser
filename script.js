let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (userGuess, targetNumber) => {
  const absoluteDistance = Math.abs(targetNumber - userGuess);
  return absoluteDistance;
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  // Calulate the absolute difference between the human guess and the target number
  if (humanGuess < 0 || humanGuess > 9) {
    alert('invalid number');
    return false;
  }
  const humandiff = getAbsoluteDistance(humanGuess, targetNumber);
  const computerdiff = getAbsoluteDistance(compareGuesses, targetNumber);
  return humandiff <= computerdiff;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  return currentRoundNumber++;
}