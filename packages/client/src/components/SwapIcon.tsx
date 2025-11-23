import type { OptionType } from "@/components/GameButton";

import { AnimatePresence, motion } from "motion/react";

import { itemEmoji } from "@/lib/itemEmoji";

interface SwapIconProps {
  icon: OptionType;
}

export function SwapIcon({
  icon,
}: SwapIconProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={icon ? itemEmoji(icon) : "empty"}
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
        {icon ? itemEmoji(icon) : "😋"}
      </motion.span>
    </AnimatePresence>
  );
}
