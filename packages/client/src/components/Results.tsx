import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

import { itemEmoji } from "@/lib/itemEmoji";

interface ResultsProps {
  userChoice: string;
  compChoice: string;
}

export function Results({
  userChoice,
  compChoice,
}: ResultsProps) {
  return (
    <div className="flex flex-grow-1 flex-col">
      <h2 className="mb-4 text-2xl font-bold">Results</h2>
      {userChoice !== "" && (
        <div className="mb-2.5">
          User Choice was:
          {" "}
          <span id="userChoice">{itemEmoji(userChoice)}</span>
        </div>
      )}
      {compChoice !== "" && (
        <div className="mb-2.5">
          Computer Score was:
          {" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={compChoice ? itemEmoji(compChoice) : "empty"}
              initial={{
                x: 10,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: -10,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              className="text-xl"
            >
              {compChoice ? itemEmoji(compChoice) : "😋"}
            </motion.span>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
