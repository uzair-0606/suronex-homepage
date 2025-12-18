"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    title: "Connect Your Systems",
    desc: "Integrate Suronex with your cloud, infrastructure, and applications in minutes.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
        <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
      </svg>
    ),
  },
  {
    title: "AI Analyzes Activity",
    desc: "Our AI continuously monitors behavior, logs, and configurations in real time.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    title: "Risks Are Detected",
    desc: "Security threats and compliance gaps are identified instantly.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
        <path d="M10.3 2.6L1.8 17a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 2.6a2 2 0 00-3.4 0z" />
      </svg>
    ),
  },
  {
    title: "Alerts & Reports",
    desc: "Receive actionable alerts and audit-ready compliance reports automatically.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
        <path d="M4 4h16v16H4z" />
        <path d="M8 8h8M8 12h8M8 16h6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const [hovered, setHovered] = useState<number | null>(null); // track hovered card

  return (
    <section className="px-8 py-32 relative">
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-20 text-center text-3xl md:text-4xl font-bold text-white">
          How It Works
        </h2>

        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} // animate line once on scroll
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="
              absolute top-6 left-0 right-0 h-px origin-left
              bg-gradient-to-r from-purple-500/20 via-purple-500/70 to-purple-500/20
              hidden md:block
            "
          />

          <div className="grid gap-10 md:grid-cols-4">
            {steps.map((item, index) => {
              const isActive = hovered === index; // hover state for glow

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15, // staggered entrance
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6 }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className={`
                    cursor-pointer rounded-2xl bg-zinc-900/80 backdrop-blur
                    p-6 border shadow-[0_18px_36px_rgba(0,0,0,0.45)]
                    transition-all duration-300
                    ${
                      isActive
                        ? "border-purple-500 shadow-[0_0_50px_rgba(147,51,234,0.45)]"
                        : "border-white/10"
                    }
                  `}
                >
                  <div
                    className={`
                      mb-4 flex h-12 w-12 items-center justify-center rounded-full
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-gradient-to-r from-purple-600 to-purple-400 shadow-[0_0_25px_rgba(147,51,234,0.6)]"
                          : "bg-zinc-800"
                      }
                    `}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-purple-400">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
