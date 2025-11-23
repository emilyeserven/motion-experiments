import type { OptionType } from "@/components/Card";

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
      {userChoice && (
        <div className="mb-2.5">
          User Choice was:
          {" "}
          <SwapIcon icon={userChoice} />
        </div>
      )}
      {compChoice && (
        <div className="mb-2.5">
          Computer Score was:
          {" "}
          <SwapIcon icon={compChoice} />
        </div>
      )}
    </div>
  );
}
