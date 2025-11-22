type gameCheckType = Record<string, Record<string, [string, string]>>;

export const gameCheck: gameCheckType = {
  rock: {
    paper: ["rock wins", "user"],
    scissors: ["paper wins", "comp"],
  },
  paper: {
    rock: ["paper wins", "user"],
    scissors: ["scissors win", "comp"],
  },
  scissors: {
    paper: ["rock wins", "comp"],
    rock: ["scissors win", "user"],
  },
};
