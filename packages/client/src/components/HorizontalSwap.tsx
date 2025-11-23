import { AnimatePresence, motion } from "motion/react";

interface SwapIconProps {
  key: string;
  isFromLeft?: boolean;
  children: React.ReactNode;
}

export function HorizontalSwap({
  key,
  isFromLeft = true,
  children,
}: SwapIconProps) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
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
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
