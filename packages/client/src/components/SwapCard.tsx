import type { OptionType } from "@/components/Card";

import { AnimatePresence, motion } from "motion/react";

import { Card } from "@/components/Card";
import { itemEmoji } from "@/lib/itemEmoji";

interface SwapIconProps {
  icon: OptionType;
  text?: string;
  isFromLeft?: boolean;
}

export function SwapCard({
  icon,
  text,
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
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
