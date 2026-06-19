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
            <div className="absolute w-24 h-24 rounded-full border border-dashed border-indigo-200 animate-[spin_20s_linear_infinite] opacity-70"></div>
            
            {/* Central icon */}
            <img src="/assets/logos/subject_francais.png" className="w-20 h-20 object-contain relative z-10" alt="Français" />
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
            <div className="absolute w-24 h-24 rounded-full border border-dashed border-sky-200 animate-[spin_20s_linear_infinite] opacity-70"></div>
            
            {/* Central Icon */}
            <img src="/assets/logos/subject_mathematiques.png" className="w-20 h-20 object-contain relative z-10" alt="Mathématiques" />
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
            <div className="absolute w-24 h-24 rounded-full border border-dashed border-emerald-200 animate-[spin_20s_linear_infinite] opacity-70"></div>
            
            {/* Central Icon */}
            <img src="/assets/logos/subject_eveil.png" className="w-20 h-20 object-contain relative z-10" alt="Éveil" />
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
            <div className="absolute w-24 h-24 rounded-full border border-dashed border-amber-200 animate-[spin_20s_linear_infinite] opacity-70"></div>
            
            {/* Central Icon */}
            <img src="/assets/logos/subject_jeux.png" className="w-20 h-20 object-contain relative z-10" alt="Jeux" />
          </div>
        </div>
      );

    default:
      return null;
  }
}
