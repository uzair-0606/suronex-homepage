"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-8 py-16">

        {/* Top */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Logo + socials */}
          <div>
            <Image
              src="/Logo.png"
              alt="Suronex Logo"
              width={150}
              height={40}
              className="mb-6"
            />

            <div className="flex gap-4">
  {/* Facebook */}
  <a
    href="#"
    aria-label="Facebook"
    className="rounded-md bg-zinc-900 p-2 hover:-translate-y-1 transition"
  >
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#1877F2]">
      <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.8V12h2.8V9.8c0-2.8 1.7-4.3 4.2-4.3 1.2 0 2.4.2 2.4.2v2.6h-1.4c-1.4 0-1.8.9-1.8 1.8V12h3.1l-.5 2.9h-2.6v7A10 10 0 0022 12z" />
    </svg>
  </a>

  {/* X (Twitter) */}
  <a
    href="#"
    aria-label="X"
    className="rounded-md bg-zinc-900 p-2 hover:-translate-y-1 transition"
  >
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
      <path d="M18.3 2H21l-6.4 7.3L22 22h-6.6l-4.5-6-5.2 6H3l6.9-7.9L2 2h6.7l4.1 5.4L18.3 2z" />
    </svg>
  </a>

  {/* YouTube */}
  <a
    href="#"
    aria-label="YouTube"
    className="rounded-md bg-zinc-900 p-2 hover:-translate-y-1 transition"
  >
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#FF0000]">
      <path d="M23.5 6.5a3 3 0 00-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4a3 3 0 00-2.1 2.1A31 31 0 000 12a31 31 0 00.5 5.5 3 3 0 002.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.5zM9.5 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="#"
    aria-label="LinkedIn"
    className="rounded-md bg-zinc-900 p-2 hover:-translate-y-1 transition"
  >
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#0A66C2]">
      <path d="M4.98 3.5A2.5 2.5 0 105 8.5a2.5 2.5 0 000-5zM3 9h4v12H3zM9 9h4v1.7h.1c.6-1 2-2 4.1-2 4.4 0 5.2 2.9 5.2 6.7V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9z" />
    </svg>
  </a>
</div>

          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Products</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Cloud Security</li>
              <li className="hover:text-white cursor-pointer">
                Inventory Management
              </li>
              <li className="hover:text-white cursor-pointer">
                Governance, Risk & Compliance
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Whitepaper</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm">
          <p>© 2025 Suronex. All rights reserved.</p>

          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Terms of use</span>
            <span className="hover:text-white cursor-pointer">Privacy policy</span>
            <span className="hover:text-white cursor-pointer">Cookie policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
