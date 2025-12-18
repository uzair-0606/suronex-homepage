"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/70 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        <div className="flex items-center">
          <img
            src="/Logo.png"
            alt="Suronex"
            className="h-12 w-auto" // preserve logo aspect ratio
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <span className="hover:text-purple-400 transition cursor-pointer">
            Product
          </span>
          <span className="hover:text-purple-400 transition cursor-pointer">
            Security
          </span>
          <span className="hover:text-purple-400 transition cursor-pointer">
            Resources
          </span>
        </div>

        <button
          className="
            rounded-md
            bg-gradient-to-r from-purple-600 to-purple-400
            px-5 py-2
            text-sm font-medium text-white
            shadow-[0_0_20px_rgba(147,51,234,0.45)]
            hover:opacity-90
            transition
          "
        >
          login
        </button>
      </div>
    </nav>
  );
}

