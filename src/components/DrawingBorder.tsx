import React from "react";

export default function DrawingBorder() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Top Left: Kids and books */}
      <div className="absolute top-10 left-8 md:block hidden opacity-60 hover:opacity-100 transition-opacity duration-300">
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
          {/* Laughing Kid Face */}
          <circle cx="35" cy="40" r="18" className="stroke-[1.5]" />
          {/* Eyes */}
          <path d="M29 37c1 0 2-2 3-2s2 2 3 2" />
          <path d="M41 37c1 0 2-2 3-2s2 2 3 2" />
          {/* Smile */}
          <path d="M29 46q6 5 12 0" />
          {/* Hair (messy lines) */}
          <path d="M20 28c3-4 6-2 9-5c4-4 8 2 12-4c3-1 6 3 9-2" />
          <path d="M17 38c-3-2-2-6 0-8" />
          <path d="M53 38c3-2 2-6 0-8" />
          
          {/* Small book doodle underneath */}
          <path d="M15 70h25c3 0 5 2 5 5v5c0-3-2-5-5-5H15V70z" strokeWidth="1.2" className="text-amber-500" />
          <path d="M15 70c0 4 2 5 5 5h25" strokeWidth="1.2" className="text-amber-500" />
          <p className="text-neutral-500"></p>
        </svg>
      </div>

      <div className="absolute top-40 left-16 lg:block hidden opacity-55">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-emerald-400">
          {/* Laptop sketch */}
          <rect x="20" y="30" width="50" height="35" rx="3" />
          <path d="M25 35h40v20H25z" />
          <path d="M10 65h70l-5 8H15z" />
          {/* Sparkle */}
          <path d="M75 25l3 3m0-3l-3 3M80 15l2 2m0-2l-2 2" />
        </svg>
      </div>

      {/* Bottom Left: Happy girl face, books and hearts */}
      <div className="absolute bottom-10 left-12 md:block hidden opacity-65">
        <svg width="190" height="190" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
          {/* Kid with glasses & round eyes */}
          <circle cx="50" cy="45" r="20" />
          {/* Hair loops (pigtails) */}
          <path d="M30 45c-8-2-10-8-5-12c4-3 8 0 5 12" />
          <path d="M70 45c8-2 10-8 5-12c-4-3-8 0-5 12" />
          {/* Glasses */}
          <circle cx="43" cy="42" r="5" />
          <circle cx="57" cy="42" r="5" />
          <path d="M48 42h4" />
          {/* Smile */}
          <path d="M44 53c3 3 9 3 12 0" />
          
          {/* Cute hearts and stars floating */}
          <path d="M15 35q2-4 4-2t2 2c0 2-4 6-6 6s-2-2-2-2q0-2 2-4" fill="none" className="text-rose-400 fill-rose-100" />
          <path d="M85 60l2 2l-1 3l3-2l3 2l-1-3l2-2l-3 0z" className="text-yellow-400 fill-yellow-100" />
        </svg>
      </div>

      <div className="absolute bottom-44 left-6 lg:block hidden opacity-60">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-amber-400">
          {/* Open Book */}
          <path d="M10 50q15-8 40 0" />
          <path d="M50 50q25-8 40 0" />
          <path d="M10 50v30q15-8 40 0v-30" />
          <path d="M90 50v30q-25-8-40 0v-30" />
          <path d="M50 50v30" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Top Right: Windmill, house, sunshine */}
      <div className="absolute top-8 right-10 md:block hidden opacity-65">
        <svg width="220" height="220" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400">
          {/* Windmill */}
          <path d="M30 100l10-60h10l10 60" />
          <circle cx="45" cy="40" r="3" />
          {/* Blades */}
          <path d="M45 40l-25-15l5-8zm0 0l25 15l-5 8zm0 0l15-25l8 5zm0 0l-15 25l-8-5z" fill="none" />
          
          {/* Sun */}
          <circle cx="95" cy="25" r="10" className="text-yellow-400 stroke-yellow-400 animate-pulse" />
          <path d="M95 8v4M95 38v4M78 25h4M108 25h4M83 13l3 3M104 34l3 3M83 37l3-3M104 16l3-3" className="stroke-yellow-400" />
        </svg>
      </div>

      <div className="absolute top-48 right-16 lg:block hidden opacity-50">
        <svg width="110" height="110" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-500">
          {/* Tree sketch */}
          <path d="M50 75V50" strokeWidth="3" />
          <path d="M50 50c-10 2-15-5-12-12c3-7 12-1 12-1M50 52c10 2 15-5 12-12c-3-7-12-1-12-1" />
          <path d="M50 55q10-15 0-25q-10 10 0 25" fill="none" />
          {/* Canopy circle scribble */}
          <path d="M50 20 C35 20, 30 35, 40 45 C35 55, 50 65, 55 58 C65 65, 70 50, 65 42 C75 35, 65 20, 50 20 Z" />
        </svg>
      </div>

      {/* Bottom Right: Earth globe and a smart student profile */}
      <div className="absolute bottom-8 right-12 md:block hidden opacity-60">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
          {/* Globe */}
          <circle cx="50" cy="45" r="22" />
          <path d="M30 40c10-2 20 5 25 15M40 25c15-5 15 15 25 10" strokeDasharray="1 1" />
          <path d="M50 23v44" />
          <path d="M28 45h44" />
          {/* Stand */}
          <path d="M50 67v10M35 77h30" />
          {/* Map details inside */}
          <path d="M42 32q5-4 10 0" />
          <path d="M55 50q4 4 8 2" />
          
          {/* Pencil */}
          <path d="M15 20l5 5l25-25l-5-5z" className="text-amber-500" />
          <path d="M15 20s-5-1-5-5s5 1 5 5" className="text-amber-500" />
        </svg>
      </div>

      <div className="absolute bottom-48 right-6 lg:block hidden opacity-50">
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-pink-400">
          {/* Lightbulb (idea) */}
          <path d="M50 20c-12 0-20 8-20 18c0 8 7 12 7 18h26c0-6 7-10 7-18c0-10-8-18-20-18z" />
          <path d="M37 56h26M39 61h22M42 66h16" />
          <path d="M50 66v6M45 72h10" />
          {/* Glow rays */}
          <path d="M50 10v4M25 25l3 3M15 40h4M25 55l3-3M75 25l-3 3M85 40h-4M75 55l-3-3" strokeWidth="1.2" className="text-yellow-400" />
        </svg>
      </div>
    </div>
  );
}
