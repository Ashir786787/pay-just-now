"use client";

import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { delay: 0.6, duration: 0.4, ease: "easeOut" as const },
  },
};

export default function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-1">
          {["P", "J", "N"].map((letter, i) => (
            <motion.span
              key={letter}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="text-white text-5xl sm:text-7xl font-extrabold tracking-tight"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          className="w-24 h-1 bg-primary rounded-full origin-left"
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
          className="text-gray-400 text-xs font-medium tracking-widest uppercase"
        >
          Pay Just Now
        </motion.span>
      </div>
    </motion.div>
  );
}
