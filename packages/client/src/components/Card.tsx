import { motion } from "motion/react";

import { itemEmoji } from "@/lib/itemEmoji";

export type OptionType = "rock" | "paper" | "scissors";

interface GameButtonParams {
  type: OptionType;
  onClick: (selection: OptionType) => void;
}

export function Card({
  type,
  onClick,
}: GameButtonParams) {
  return (
    <motion.div
      id={type}
      className={`
        mx-[1%] inline-flex cursor-pointer flex-col gap-2 rounded-lg border-2
        border-gray-300 bg-gray-200 px-2 py-2 text-center align-top shadow
        transition-all duration-200 ease-in-out
        hover:border-gray-400 hover:shadow-md
        active:border-green-800 active:bg-green-200
      `}
      onClick={() => onClick(type)}
      initial={{
        opacity: 0.95,
      }}
      whileHover={{
        scale: 1.01,
        opacity: 1,
        rotate: Math.random(),
        transition: {
          duration: 0.1,
        },
      }}
      whileTap={{
        scale: 1.02,
        rotate: -1 * Math.random() * 2,
        transition: {
          duration: 0.05,
        },
      }}
    >
      <div className="rounded-md bg-white px-4 py-6">
        <span className="text-8xl">
          {itemEmoji(type)}
        </span>
      </div>

      <span className="relative bottom-0 text-[25px] capitalize">{type}</span>
    </motion.div>
  );
}
