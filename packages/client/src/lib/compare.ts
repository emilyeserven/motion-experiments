import { gameCheck } from "@/utils/gameCheck";

export const compare = (choice1: string, choice2: string) => {
  if (!(choice1 in gameCheck) || !(choice2 in gameCheck)) {
    return ["Invalid arguments passed", "tie"];
  }
  if (choice1 === choice2) {
    return ["The result is a tie!", "tie"];
  }
  return gameCheck[choice1][choice2];
};
