"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import SplineBackground from "@/components/SplineBackground";

const features = [
  {
    title: "AI Risk Detection",
    desc: "Automatically identify security threats using intelligent AI models.",
  },
  {
    title: "Compliance Automation",
    desc: "Continuously meet regulatory standards without manual effort.",
  },
  {
    title: "Real-Time Alerts",
    desc: "Instant notifications the moment risks or violations appear.",
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Built to scale with modern enterprise infrastructure.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  /* Scroll-based parallax for 3D */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.25, 1.1, 1]);
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    hovered ? [0.35, 0.25, 0.15] : [0.25, 0.18, 0.1]
  );

  return (
    <section
      ref={sectionRef}
      className="relative px-8 py-32 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 3D BACKGROUND — LIMITED TO THIS SECTION ONLY */}
      <motion.div
        style={{ y: bgY, scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <SplineBackground />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-3xl md:text-4xl font-bold text-white">
          Key Features
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(147,51,234,0.35)",
              }}
              className="
                cursor-pointer
                rounded-2xl
                bg-zinc-900/80
                backdrop-blur
                p-6
                border border-white/10
                shadow-[0_20px_40px_rgba(0,0,0,0.45)]
              "
            >
              <h3 className="mb-3 text-lg font-semibold text-purple-400">
                {feature.title}
              </h3>

              <p className="text-sm leading-relaxed text-zinc-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
