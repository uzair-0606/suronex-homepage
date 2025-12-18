"use client";

import Image from "next/image";

const logos = [
  "/partner/aws.jpg",
  "/partner/google.jpg",
  "/partner/microsoft.jpg",
  "/partner/ibm.jpg",
  "/partner/oracle.jpg",
];

export default function TrustedBy() {
  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      <p className="mb-12 text-center text-sm uppercase tracking-widest text-zinc-400">
        Trusted by teams at
      </p>


      
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

      
      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-20 items-center">

          
          {logos.map((logo, i) => (
            <div key={`first-${i}`} className="flex items-center">
              <Image
                src={logo}
                alt="Partner logo"
                width={150}
                height={60}
                className="
                  object-contain
                  opacity-80
                  hover:opacity-100
                  transition
                "
              />
            </div>
          ))}

          {/* Duplicate set for infinite loop */}
          {logos.map((logo, i) => (
            <div key={`second-${i}`} className="flex items-center">
              <Image
                src={logo}
                alt="Partner logo"
                width={150}
                height={60}
                className="
                  object-contain
                  opacity-80
                  hover:opacity-100
                  transition
                "
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
