"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="px-8 py-28 bg-transparent">
      <motion.div
        initial={{ boxShadow: "0 0 0 0 rgba(147,51,234,0)" }}
        whileInView={{
         boxShadow: "0 0 80px 18px rgba(147,51,234,0.35)",
        }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="
          mx-auto max-w-5xl
          rounded-3xl
          bg-zinc-900
          px-12
          py-16
          text-center
          border border-white/10
        "
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Secure Your Organization with AI
        </h2>

        <p className="mt-4 text-zinc-400">
          Start monitoring security and compliance effortlessly.
        </p>

        <button className="mt-8 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 text-white font-medium">
          Request a Demo
        </button>
      </motion.div>
    </section>
  );
}

