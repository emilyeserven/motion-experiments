import type { OptionType } from "@/components/Card";

import { motion } from "motion/react";

import { Results } from "@/components/Results";
import { Scores } from "@/components/Scores";

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
      <Results
        userChoice={userChoice}
        compChoice={compChoice}
        winner={winner}
        turn={turn}
      />
      <Scores
        userScore={userScore}
        compScore={compScore}
        turn={turn}
      />
    </motion.div>
  );
}
