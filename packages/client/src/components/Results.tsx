import type { OptionType } from "@/components/Card";

import { Card } from "@/components/Card";
import { HorizontalSwap } from "@/components/HorizontalSwap";
import { getWinStatus } from "@/utils/getWinStatus";

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
  return (
    <div className="flex flex-grow-1 flex-col">
      <h2 className="mb-4 text-2xl font-bold">Results</h2>
      <div className="flex flex-row flex-wrap gap-8">
        {userChoice && winner && (
          <div className="flex flex-col">
            <HorizontalSwap
              key={turn + ""}
            >
              <Card
                icon={userChoice}
                text="You"
                type={getWinStatus(true, winner)}
              />
            </HorizontalSwap>
          </div>
        )}
        {compChoice && winner && (
          <div className="flex flex-col">
            <HorizontalSwap
              key={turn + ""}
              isFromLeft={false}
            >
              <Card
                icon={compChoice}
                text="Comp"
                type={getWinStatus(false, winner)}
              />
            </HorizontalSwap>
          </div>
        )}
      </div>
    </div>
  );
}
