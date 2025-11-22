import { motion } from "motion/react";

import { Results } from "@/components/Results";
import { Scores } from "@/components/Scores";

interface ResultAreaProps {
  userChoice: string;
  compChoice: string;
  userScore: number;
  compScore: number;
}

export function ResultArea({
  userChoice,
  userScore,
  compChoice,
  compScore,
}: ResultAreaProps) {
  if (userChoice === "" && compChoice === "") {
    return <></>;
  }

  return (
    <motion.div
      className="mx-2 mt-8"
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
      <div
        className={`
          inline-block w-[49%] align-top
          max-[800px]:block max-[800px]:w-full
        `}
      >
        <Results
          userChoice={userChoice}
          compChoice={compChoice}
        />
      </div>

      <div
        className={`
          mt-0 inline-block w-[49%] align-top
          max-[800px]:mt-8 max-[800px]:block max-[800px]:w-full
        `}
      >
        <Scores
          userScore={userScore}
          compScore={compScore}
        />
      </div>
    </motion.div>
  );
}
