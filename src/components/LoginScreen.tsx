import React, { useState } from "react";
import DrawingBorder from "./DrawingBorder";
import { DEFAULT_STUDENTS } from "./StudentList";
import { ArrowRight, UserPlus, GraduationCap, Unlock } from "lucide-react";

interface LoginScreenProps {
  onLogin: (name: string) => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [showConfig, setShowConfig] = useState(false);
  const [customName, setCustomName] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customName.trim()) {
      onLogin(customName.trim());
    } else if (selectedStudentId) {
      const student = DEFAULT_STUDENTS.find(s => s.id === selectedStudentId);
      if (student) {
        onLogin(student.name);
      }
    }
  };

  const selectExistingStudent = (name: string, id: string) => {
    setSelectedStudentId(id);
    setCustomName("");
    onLogin(name);
  };

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] flex items-center justify-center p-4 overflow-hidden">
      {/* Playful Marker Doodles Border */}
      <DrawingBorder />

      {/* Main card */}
      <div className="relative z-10 w-full max-w-lg bg-white/95 backdrop-blur-md rounded-[32px] border-4 border-neutral-900 px-6 py-10 md:p-12 text-center transition-all duration-300 shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:shadow-[14px_14px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1">
        
        {/* Floating marker stars */}
        <div className="absolute top-6 left-6 text-yellow-500 font-sketch text-lg">★</div>
        <div className="absolute bottom-6 right-6 text-pink-500 font-sketch text-2xl">❤</div>

        {/* Cursive Subtitle */}
        <span className="font-sketch text-xl md:text-2xl text-indigo-500 block rotate-[-3deg] mb-3 animate-pulse">
          Bienvenue dans ta classe !
        </span>

        {/* Big Display Title */}
        <h1 className="font-display font-black text-4xl md:text-5xl text-neutral-800 tracking-tight leading-none mb-1 text-center select-none">
          Classe de <span className="text-neutral-900 block mt-2 text-5xl md:text-6xl font-black italic relative inline-block">Mr Lejoly<span className="absolute left-0 bottom-1 w-full h-3 bg-amber-200/60 -z-10 rotate-[-1deg]"></span></span>
        </h1>

        {/* Primary Meta details */}
        <div className="font-sans font-medium text-neutral-500 text-sm md:text-base space-y-0.5 mt-4 mb-10">
          <p className="font-medium tracking-wide">5e & 6e primaire</p>
          <p className="text-xs text-neutral-400 font-mono flex items-center justify-center gap-1">
            <GraduationCap className="w-3.5 h-3.5" /> École de Waimes Centre
          </p>
        </div>

        {!showConfig ? (
          /* Initial Screen - Large Se connecter button */
          <div className="space-y-6">
            <button
              onClick={() => setShowConfig(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 tracking-wide text-white text-base md:text-lg font-display font-bold rounded-full border-2 border-neutral-900 hover:bg-[#FDFBF7] hover:text-neutral-900 active:scale-95 hover:shadow-md transition-all duration-200 select-none cursor-pointer group"
            >
              <span>✨ Se connecter</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-xs text-neutral-400 font-mono tracking-wider">
               Accès rapide en un clic pour les élèves de Waimes
            </p>
          </div>
        ) : (
          /* Student selection & sign in configuration block */
          <form onSubmit={handleLoginSubmit} className="space-y-6 text-left animate-fadeIn">
            <div>
              <label className="block text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-3">
                 Choisis ton prénom :
              </label>
              
              {/* Ready preset students picker */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                {DEFAULT_STUDENTS.map((stud) => (
                  <button
                    key={stud.id}
                    type="button"
                    onClick={() => selectExistingStudent(stud.name, stud.id)}
                    className="p-3 bg-neutral-50 border-2 border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white duration-200 rounded-2xl flex flex-col items-center gap-2 transition text-center cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-2xl border-2 border-neutral-900 overflow-hidden bg-white flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,1)] group-hover:scale-105 transition-transform duration-200 shrink-0">
                      {stud.photoUrl ? (
                        <img src={stud.photoUrl} alt={stud.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-2xl" role="img" aria-label="avatar">{stud.avatar}</span>
                      )}
                    </div>
                    <span className="font-display text-sm font-bold tracking-tight text-neutral-800 group-hover:text-white transition-colors duration-200">{stud.name}</span>
                  </button>
                ))}
              </div>

              {/* Or manual form */}
              <div className="flex items-center gap-2 my-4">
                <div className="h-px bg-neutral-200 flex-1"></div>
                <span className="text-xs font-mono text-neutral-400 font-medium">OU ENREGISTRE TON PRÉNOM</span>
                <div className="h-px bg-neutral-200 flex-1"></div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Écris ton prénom ici..."
                  value={customName}
                  onChange={(e) => {
                    setCustomName(e.target.value);
                    setSelectedStudentId("");
                  }}
                  className="w-full text-base font-display font-medium text-neutral-900 placeholder-neutral-400 bg-white border-2 border-neutral-200 px-5 py-4 rounded-2xl outline-none focus:border-neutral-900 transition-all focus:ring-4 focus:ring-neutral-200/50"
                  maxLength={15}
                  required={!selectedStudentId}
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowConfig(false)}
                className="flex-1 py-4 bg-neutral-100 hover:bg-neutral-200 rounded-2xl text-sm font-semibold text-neutral-600 transition"
              >
                Retour
              </button>
              <button
                type="submit"
                className="flex-1 py-4 bg-neutral-900 text-white hover:bg-neutral-800 rounded-2xl text-sm font-semibold transition shadow-md flex items-center justify-center gap-1.5"
              >
                <Unlock className="w-4 h-4" />
                C'est parti !
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
