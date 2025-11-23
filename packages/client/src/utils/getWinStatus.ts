export const getWinStatus = function (isCheckForUser: boolean, winStatus: string) {
  if (winStatus === "tie") {
    return "tie";
  }
  if (isCheckForUser && winStatus === "user") {
    return "winner";
  }
  if (!isCheckForUser && winStatus === "comp") {
    return "winner";
  }
  if (isCheckForUser && winStatus === "comp") {
    return "loser";
  }
  if (!isCheckForUser && winStatus === "user") {
    return "loser";
  }
  return "neutral";
};
