import type { CardType, OptionType } from "@/components/Card";

import { AnimatePresence, motion } from "motion/react";

import { Card } from "@/components/Card";
import { itemEmoji } from "@/lib/itemEmoji";

interface SwapIconProps {
  icon: OptionType;
  text?: string;
  type?: CardType;
  isFromLeft?: boolean;
}

export function SwapCard({
  icon,
  text,
  type = "neutral",
  isFromLeft = true,
}: SwapIconProps) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
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
        >
          <Card
            icon={icon}
            text={text}
            type={type}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
