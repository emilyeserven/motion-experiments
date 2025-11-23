import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { getItemEmoji } from "@/utils/getItemEmoji";

export type OptionType = "rock" | "paper" | "scissors";
export type CardType = "neutral" | "winner" | "loser" | "tie";

interface GameButtonParams {
  icon?: OptionType;
  type?: CardType;
  text?: string;
  onClick?: (selection: OptionType) => void;
}

export function Card({
  icon,
  text,
  type,
  onClick,
}: GameButtonParams) {
  return (
    <motion.div
      id={icon}
      className={cn(
        `
          mx-[1%] inline-flex flex-col gap-2 rounded-lg border-2 border-gray-300
          bg-gray-200 px-2 py-2 text-center align-top shadow transition-all
          duration-200 ease-in-out
        `,
        {
          "cursor-pointer hover:border-gray-400 hover:shadow-md active:border-green-800 active:bg-green-200": onClick,
          "border-green-800 bg-green-200": type === "winner",
          "border-red-800 bg-red-200": type === "loser",
          "border-slate-800 bg-slate-200": type === "tie",
        },
      )}
      onClick={onClick && icon ? () => onClick(icon) : undefined}
      initial={
        onClick
          ? {
            opacity: 0.95,
          }
          : {}
      }
      whileHover={
        onClick
          ? {
            scale: 1.01,
            opacity: 1,
            rotate: Math.random(),
            transition: {
              duration: 0.1,
            },
          }
          : {}
      }
      whileTap={
        onClick
          ? {
            scale: 1.02,
            rotate: -1 * Math.random() * 2,
            transition: {
              duration: 0.05,
            },
          }
          : {}
      }
    >
      <span className="relative bottom-0 text-[25px]">{text ? text : icon}</span>

      <div className="rounded-md bg-white px-4 py-6">
        <span
          className={!icon ? "text-8xl opacity-80" : "text-8xl"}
          data-testid="card-emoji"
        >
          {getItemEmoji(icon)}
        </span>
      </div>

    </motion.div>
  );
}
