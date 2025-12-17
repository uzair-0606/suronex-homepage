"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "AI-Driven Risk Detection",
    desc: "Suronex continuously scans your infrastructure to identify security risks and compliance gaps using advanced AI models.",
    image: "/features/feature-1.jpg",
  },
  {
    title: "Real-Time Monitoring",
    desc: "Monitor configurations, access patterns, and system behavior in real time without manual intervention.",
    image: "/features/feature-2.jpg",
  },
  {
    title: "Compliance-Ready Reports",
    desc: "Generate audit-ready reports instantly for ISO, SOC 2, GDPR, and other compliance frameworks.",
    image: "/features/feature-3.jpg",
  },
];

export default function Features() {
  return (
    <section className="px-8 py-40">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-32 text-center text-3xl md:text-4xl font-bold text-white"
        >
          Built for Modern Security Teams
        </motion.h2>

        {/* Feature Rows */}
        <div className="space-y-40">
          {features.map((feature, index) => {
            const reverse = index % 2 !== 0;

            // 👇 Extra spacing ONLY for feature 1 & 3
            const extraGap =
              index === 0 || index === 2 ? "md:gap-32" : "md:gap-24";

            return (
              <div
                key={index}
                className={`grid items-center gap-24 ${extraGap} md:grid-cols-2`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`
                    relative rounded-3xl
                    border border-white/10
                    bg-zinc-900/80
                    shadow-[0_30px_60px_rgba(0,0,0,0.5)]
                    p-5 md:p-6
                    ${reverse ? "md:order-2" : ""}
                  `}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={720}
                      height={460}
                      className="w-full h-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`${reverse ? "md:order-1" : ""}`}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-purple-400">
                    {feature.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                    {feature.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
