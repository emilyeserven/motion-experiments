import { AnimatePresence, motion } from "motion/react";

interface SwapContentProps {
  content: string | number;
}

export function SwapContent({
  content,
}: SwapContentProps) {
  return (
    <div className="flex flex-1 items-center justify-center">
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
          className={content ? "text-xl" : "text-xl text-gray-400"}
        >
          {content ? content : "0"}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
