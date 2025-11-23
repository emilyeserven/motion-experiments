import type { OptionType } from "@/components/Card";

import { AnimatePresence, motion } from "motion/react";

import { itemEmoji } from "@/lib/itemEmoji";

interface SwapIconProps {
  icon: OptionType;
  isFromLeft?: boolean;
}

export function SwapIcon({
  icon,
  isFromLeft = true,
}: SwapIconProps) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={icon ? itemEmoji(icon) : "empty"}
          initial={{
            x: isFromLeft ? -10 : 10,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: isFromLeft ? -10 : 10,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="text-3xl"
        >
          {icon ? itemEmoji(icon) : "😋"}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
