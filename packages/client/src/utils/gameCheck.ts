type gameCheckType = Record<string, Record<string, [string, string]>>;

export const gameCheck: gameCheckType = {
  rock: {
    paper: ["paper wins", "comp"],
    scissors: ["rock wins", "user"],
  },
  paper: {
    rock: ["paper wins", "user"],
    scissors: ["scissors win", "comp"],
  },
  scissors: {
    paper: ["scissors wins", "user"],
    rock: ["rock win", "comp"],
  },
};
