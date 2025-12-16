"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import HeroIntro from "@/components/HeroIntro";

export default function Hero() {
  const [showHero, setShowHero] = useState(false);

  return (
    <>
      {!showHero && (
        <HeroIntro onComplete={() => setShowHero(true)} />
      )}

      {showHero && (
        <section className="relative px-8 py-32">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="
                rounded-3xl
                bg-zinc-900/80
                backdrop-blur
                px-12
                py-16
                text-center
                border border-white/10
                shadow-[0_20px_40px_rgba(0,0,0,0.4)]
              "
            >
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-300 bg-clip-text text-transparent">
                  AI-Powered Security & Compliance
                </span>
              </h1>

              <p className="mt-6 text-lg text-zinc-400 max-w-3xl mx-auto">
                Suronex helps enterprises automatically detect security risks,
                ensure compliance, and protect systems using intelligent AI.
              </p>

              <button className="mt-10 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 text-white font-medium hover:opacity-90 transition">
                Request a Demo
              </button>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}

