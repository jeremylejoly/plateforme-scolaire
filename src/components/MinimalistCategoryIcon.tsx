import React from "react";
import { BookOpen, Calculator, Globe, Gamepad2, Compass, PenTool, FlaskConical, Dices, ChevronRight, Binary } from "lucide-react";
import { SubjectId } from "../types";

interface MinimalistCategoryIconProps {
  id: SubjectId;
  active?: boolean;
}

export default function MinimalistCategoryIcon({ id, active = false }: MinimalistCategoryIconProps) {
  const containerClass = `relative w-full h-40 max-h-40 rounded-xl flex items-center justify-center transition-all duration-300 ${
    active ? "scale-105" : "hover:scale-[1.02]"
  }`;

  switch (id) {
    case "francais":
      return (
        <div className={`${containerClass} bg-indigo-50/60 overflow-hidden`}>
          {/* Minimal grids background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          {/* Main Visual: Floating book & pen */}
          <div className="relative flex items-center justify-center">
            {/* Outline subtle circle */}
            <div className="absolute w-24 h-24 rounded-full border border-dashed border-indigo-200 animate-spin-[spin_20s_linear_infinite] opacity-70"></div>
            
            {/* Supporting Letter badges */}
            <div className="absolute -top-6 -left-8 bg-indigo-100 text-indigo-700 text-xs font-bold font-display px-2 py-1 rounded-md shadow-xs transform -rotate-12 select-none">
              Aa
            </div>
            <div className="absolute -bottom-4 right-6 bg-purple-100 text-purple-700 text-xs font-bold font-display px-2 py-0.5 rounded-md shadow-xs transform rotate-6 select-none">
              B
            </div>
            
            {/* Central icon */}
            <div className="relative bg-white p-4 rounded-2xl shadow-md border border-indigo-100/50 text-indigo-600 transition-colors duration-300">
              <BookOpen className="w-10 h-10" strokeWidth={1.8} />
            </div>
            
            {/* Secondary companion icon in the background */}
            <div className="absolute -right-4 -top-3 bg-indigo-50/90 text-indigo-400 p-1.5 rounded-lg border border-indigo-100 shadow-xs">
              <PenTool className="w-4 h-4" />
            </div>
          </div>
        </div>
      );

    case "mathematiques":
      return (
        <div className={`${containerClass} bg-sky-50/60 overflow-hidden`}>
          {/* Grid bg */}
          <div className="absolute inset-0 opacity-12 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:12px_12px]"></div>
          
          <div className="relative flex items-center justify-center">
            {/* Rotating dashed geometric frame */}
            <div className="absolute w-28 h-28 rounded-lg border border-sky-200 rotate-12 opacity-60"></div>
            <div className="absolute w-28 h-28 rounded-lg border border-dashed border-sky-100 -rotate-12 opacity-80"></div>
            
            {/* Floating floating math tokens */}
            <div className="absolute -top-6 -left-6 bg-sky-100 text-sky-700 text-xs font-mono font-bold px-1.5 py-0.5 rounded border border-sky-200 select-none">
              π ≈ 3.14
            </div>
            <div className="absolute -bottom-4 right-4 bg-blue-100 text-blue-700 text-xs font-mono font-bold px-1.5 py-0.5 rounded border border-blue-200 select-none">
              x + y = 5
            </div>
            
            {/* Central Icon */}
            <div className="relative bg-white p-4 rounded-2xl shadow-md border border-sky-100/50 text-sky-600">
              <Calculator className="w-10 h-10" strokeWidth={1.8} />
            </div>

            {/* Math Symbols Decorator */}
            <div className="absolute -right-4 -top-2 bg-sky-50/90 text-sky-400 p-1.5 rounded-lg border border-sky-100 shadow-xs">
              <Binary className="w-4 h-4" />
            </div>
          </div>
        </div>
      );

    case "eveil":
      return (
        <div className={`${containerClass} bg-emerald-50/60 overflow-hidden`}>
          {/* Wave/organic bg grids */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:14px_14px]"></div>
          
          <div className="relative flex items-center justify-center">
            {/* Target orbit ring */}
            <div className="absolute w-26 h-26 rounded-full border border-emerald-200 opacity-75"></div>
            <div className="absolute w-20 h-20 rounded-full border border-dashed border-emerald-300 animate-spin-[spin_40s_linear_infinite] opacity-40"></div>
            
            {/* Geographic & Science labels */}
            <div className="absolute -top-7 -left-6 bg-emerald-100 text-emerald-800 text-xs font-bold font-display px-2 py-0.5 rounded-full shadow-xs border border-emerald-200 select-none">
              Espace 🌌
            </div>
            <div className="absolute -bottom-5 right-2 bg-teal-100 text-teal-800 text-xs font-bold font-display px-2 py-0.5 rounded-full shadow-xs border border-teal-200 select-none">
              Histoire 🏛️
            </div>
            
            {/* Central Icon */}
            <div className="relative bg-white p-4 rounded-2xl shadow-md border border-emerald-100/50 text-emerald-600">
              <Globe className="w-10 h-10" strokeWidth={1.8} />
            </div>

            {/* Lab/Science Flask symbol */}
            <div className="absolute -right-3 -top-3 bg-emerald-50/90 text-emerald-400 p-1.5 rounded-lg border border-emerald-100 shadow-xs animate-bounce-[bounce_3s_infinite]">
              <FlaskConical className="w-4 h-4" />
            </div>
          </div>
        </div>
      );

    case "jeux":
      return (
        <div className={`${containerClass} bg-amber-50/60 overflow-hidden`}>
          {/* Grid bg */}
          <div className="absolute inset-0 opacity-12 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:15px_15px]"></div>
          
          <div className="relative flex items-center justify-center">
            {/* Angled diamond frame */}
            <div className="absolute w-24 h-24 rotate-45 border border-dashed border-amber-200 opacity-60"></div>
            
            {/* Playful elements floating */}
            <div className="absolute -top-6 -left-6 bg-amber-100 text-amber-800 text-xs font-bold font-display px-2 py-0.5 rounded-md shadow-xs border border-amber-200 select-none">
              Défis 🎯
            </div>
            <div className="absolute -bottom-4 right-4 bg-orange-100 text-orange-800 text-xs font-bold font-display px-2 py-0.5 rounded-md shadow-xs border border-orange-200 select-none">
              Quiz 🏆
            </div>
            
            {/* Central Icon */}
            <div className="relative bg-white p-4 rounded-2xl shadow-md border border-amber-100/50 text-amber-600">
              <Gamepad2 className="w-10 h-10" strokeWidth={1.8} />
            </div>

            {/* Dices companion */}
            <div className="absolute -right-4 -top-2 bg-amber-50/90 text-amber-500 p-1.5 rounded-lg border border-amber-100 shadow-xs">
              <Dices className="w-4 h-4" />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
