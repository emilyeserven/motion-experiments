import type { OptionType } from "@/components/Card";

import { Card } from "@/components/Card";
import { HorizontalSwap } from "@/components/HorizontalSwap";

interface ResultsProps {
  userChoice?: OptionType;
  compChoice?: OptionType;
  winner?: string;
  turn: number;
}

export function Results({
  userChoice,
  compChoice,
  winner,
  turn,
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
            <HorizontalSwap
              key={turn + ""}
            >
              <Card
                icon={userChoice}
                text="You"
                type={getUserWinStatus(winner)}
              />
            </HorizontalSwap>
          </div>
        )}
        {compChoice && winner && (
          <div className="flex flex-col">
            <span>Computer Choice</span>
            <HorizontalSwap
              key={turn + ""}
              isFromLeft={false}
            >
              <Card
                icon={compChoice}
                text="Comp"
                type={getCompWinStatus(winner)}
              />
            </HorizontalSwap>
          </div>
        )}
      </div>
    </div>
  );
}
