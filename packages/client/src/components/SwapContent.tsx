import { AnimatePresence, motion } from "motion/react";

interface SwapContentProps {
  content: string | number;
}

export function SwapContent({
  content,
}: SwapContentProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={content ? content : "empty"}
        initial={{
          y: 10,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -10,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="text-xl"
      >
        {content ? content : "😋"}
      </motion.span>
    </AnimatePresence>
  );
}
