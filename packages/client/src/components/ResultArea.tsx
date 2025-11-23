import type { OptionType } from "@/components/Card";

import { motion } from "motion/react";

import { Card } from "@/components/Card";
import { HorizontalSwap } from "@/components/HorizontalSwap";
import { SwapContent } from "@/components/SwapContent";
import { getWinStatus } from "@/utils/getWinStatus";

interface ResultAreaProps {
  userChoice?: OptionType;
  compChoice?: OptionType;
  userScore: number;
  compScore: number;
  winner?: string;
  turn: number;
}

export function ResultArea({
  userChoice,
  userScore,
  compChoice,
  compScore,
  winner,
  turn,
}: ResultAreaProps) {
  if (!userChoice && !compChoice) {
    return <></>;
  }

  return (
    <motion.div
      className={`
        mx-2 mt-8 flex w-full flex-col gap-8
        sm:flex-row sm:gap-2
      `}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
    >
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
      <div className="flex flex-grow-1 flex-col">
        <h2 className="mb-4 text-2xl font-bold">Score</h2>
        <div className="mb-2.5 flex gap-8">
          <div className="flex flex-col">
            <span>Turn</span>
            <SwapContent content={turn} />
          </div>
          <div className="flex flex-col">
            <span>User Score</span>
            <SwapContent content={userScore} />
          </div>
          <div className="flex flex-col">
            <span>Computer Score</span>
            <SwapContent content={compScore} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
