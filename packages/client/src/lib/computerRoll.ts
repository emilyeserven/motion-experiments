export const computerRoll = function () {
  const computerChoice = Math.random();
  let computerReturn;
  // Above will select a random number between 0 and 1 and store that number in the computerChoice variable.
  // Below if statement will assign Rock, Paper, or Scissors to the number.
  if (computerChoice < 0.34) {
    computerReturn = "rock";
  }
  else if (computerChoice <= 0.67) {
    computerReturn = "paper";
  }
  else {
    computerReturn = "scissors";
  }
  // Return the string as the variable computerChoice.
  return computerReturn;
};
