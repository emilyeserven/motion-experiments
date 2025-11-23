import type { OptionType } from "@/components/Card";

import { Card } from "@/components/Card";
import { SwapIcon } from "@/components/SwapIcon";

interface ResultsProps {
  userChoice?: OptionType;
  compChoice?: OptionType;
}

export function Results({
  userChoice,
  compChoice,
}: ResultsProps) {
  return (
    <div className="flex flex-grow-1 flex-col">
      <h2 className="mb-4 text-2xl font-bold">Results</h2>
      <div className="flex flex-row flex-wrap gap-8">
        {userChoice && (
          <div className="flex flex-col">
            <span>User Choice</span>
            <SwapIcon icon={userChoice} />
            <Card
              icon={userChoice}
              text="Your Pick"
            />
          </div>
        )}
        {compChoice && (
          <div className="flex flex-col">
            <span>Computer Choice</span>
            <SwapIcon
              icon={compChoice}
              isFromLeft={false}
            />
            <Card
              icon={compChoice}
              text="Comp Pick"
            />
          </div>
        )}
      </div>
    </div>
  );
}
