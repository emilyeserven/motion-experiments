import type { OptionType } from "@/components/Card";

import { SwapCard } from "@/components/SwapCard";

interface ResultsProps {
  userChoice?: OptionType;
  compChoice?: OptionType;
  winner?: string;
}

export function Results({
  userChoice,
  compChoice,
  winner,
}: ResultsProps) {
  function getUserWinStatus(winner: string) {
    if (winner === "user") {
      return "winner";
    }
    if (winner === "tie") {
      return "tie";
    }
    if (winner === "comp") {
      return "loser";
    }
    return "neutral";
  }
  function getCompWinStatus(winner: string) {
    if (winner === "user") {
      return "loser";
    }
    if (winner === "tie") {
      return "tie";
    }
    if (winner === "comp") {
      return "winner";
    }
    return "neutral";
  }

  return (
    <div className="flex flex-grow-1 flex-col">
      <h2 className="mb-4 text-2xl font-bold">Results</h2>
      <div className="flex flex-row flex-wrap gap-8">
        {userChoice && winner && (
          <div className="flex flex-col">
            <span>User Choice</span>
            <SwapCard
              icon={userChoice}
              text="You"
              type={getUserWinStatus(winner)}
            />
          </div>
        )}
        {compChoice && winner && (
          <div className="flex flex-col">
            <span>Computer Choice</span>
            <SwapCard
              icon={compChoice}
              text="Comp"
              isFromLeft={false}
              type={getCompWinStatus(winner)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
