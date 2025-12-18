"use client";

import { motion } from "framer-motion";

export default function HeroIntro({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 1800); // controlled delay before hero loads
      }}
    >
      <motion.img
        src="/Logo.png"
        alt="Suronex"
        className="h-20 mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-400 blur-3xl opacity-60"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.6 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
    </motion.div>
  );
}
