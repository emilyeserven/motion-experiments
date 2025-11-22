export const computerRoll = function () {
  console.log("2. Computer is rolling.");
  const computerChoice = Math.random();
  let computerReturn = "";
  // Above will select a random number between 0 and 1 and store that number in the computerChoice variable.
  // Below if statement will assign Rock, Paper, or Scissors to the number.
  if (computerChoice < 0.34) {
    computerReturn = "rock";
    console.log("3a. Math is " + computerChoice);
  }
  else if (computerChoice <= 0.67) {
    computerReturn = "paper";
    console.log("3b. Math is " + computerChoice);
  }
  else {
    computerReturn = "scissors";
    console.log("3c. Math is " + computerChoice);
  }
  console.log("3sub. Computer Choice is " + computerChoice);
  // Return the string as the variable computerChoice.
  return computerReturn;
};
