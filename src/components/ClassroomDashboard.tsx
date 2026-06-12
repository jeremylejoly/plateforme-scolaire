import React, { useState } from "react";
import MinimalistCategoryIcon from "./MinimalistCategoryIcon";
import FrancaisActivity from "./FrancaisActivity";
import MathsActivity from "./MathsActivity";
import EveilActivity from "./EveilActivity";
import JeuxActivity from "./JeuxActivity";
import { LogOut, ArrowRight, Sparkles, BookOpen, Calculator, Globe, Gamepad2, GraduationCap } from "lucide-react";
import { Subject, SubjectId } from "../types";
import { DEFAULT_STUDENTS } from "./StudentList";

interface ClassroomDashboardProps {
  studentName: string;
  onLogout: () => void;
}

const SUBJECTS_DATA: Subject[] = [
  {
    id: "francais",
    title: "Français",
    caption: "Lecture, grammaire, conjugaison...",
    color: "indigo",
    accentColor: "#6366f1",
    dotColor: "bg-indigo-500",
    description: "Améliore ton orthographe grâce à nos défis de conjugaison et d'accords verbaux de 5e/6e primaire."
  },
  {
    id: "mathematiques",
    title: "Mathématiques",
    caption: "Numération, opérations, géométrie...",
    color: "sky",
    accentColor: "#0ea5e9",
    dotColor: "bg-sky-500",
    description: "Entraîne tes compétences de calcul rapide, tables de multiplications et fractions décimales."
  },
  {
    id: "eveil",
    title: "Éveil",
    caption: "Histoire, géographie, sciences...",
    color: "emerald",
    accentColor: "#10b981",
    dotColor: "bg-emerald-500",
    description: "Explore les provinces belges, le cycle de l'eau, et les grandes aventures scientifiques de notre monde."
  },
  {
    id: "jeux",
    title: "Jeux",
    caption: "Défis, quiz et jeux éducatifs...",
    color: "amber",
    accentColor: "#f59e0b",
    dotColor: "bg-amber-500",
    description: "Apprends en t'amusant avec notre dictionnaire du Mot Mystère secret de la classe !"
  }
];

export default function ClassroomDashboard({ studentName, onLogout }: ClassroomDashboardProps) {
  const [activeSubject, setActiveSubject] = useState<SubjectId | null>(null);

  const currentStudent = DEFAULT_STUDENTS.find(
    (s) => s.name.toLowerCase() === studentName.toLowerCase()
  );

  // Return the selected activity component based on the active subject ID
  const renderActiveActivity = () => {
    switch (activeSubject) {
      case "francais":
        return <FrancaisActivity studentName={studentName} onBack={() => setActiveSubject(null)} />;
      case "mathematiques":
        return <MathsActivity studentName={studentName} onBack={() => setActiveSubject(null)} />;
      case "eveil":
        return <EveilActivity studentName={studentName} onBack={() => setActiveSubject(null)} />;
      case "jeux":
        return <JeuxActivity studentName={studentName} onBack={() => setActiveSubject(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50/70 py-8 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Banner Top Header representing classroom headers */}
        <header className="bg-white border-2 border-neutral-900 rounded-2xl p-4 md:p-6 mb-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row justify-between items-center gap-4 relative overflow-hidden">
          {/* Faint drawing styled background overlay to simulate handdrawn border */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 select-none pointer-events-none"></div>
          
          <div className="relative flex items-center gap-3">
            <div className="bg-amber-100 hover:rotate-12 transition-transform duration-200 p-2.5 rounded-xl border border-amber-200">
              <span className="text-2xl" role="img" aria-label="school">🏫</span>
            </div>
            <div>
              <h1 className="font-display font-black text-2xl text-neutral-800 tracking-tight leading-none">
                Classe de Mr Lejoly
              </h1>
              <p className="text-xs md:text-sm text-neutral-500 font-medium font-sans mt-1 flex items-center gap-1">
                <GraduationCap className="w-4 h-4 shrink-0 text-indigo-500" />
                5e & 6e primaire - École de Waimes Centre
              </p>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 font-display font-medium text-xs md:text-sm rounded-xl transition duration-200 active:scale-95"
            title="Se déconnecter"
          >
            <LogOut className="w-4 h-4" />
            <span>Changer d'élève</span>
          </button>
        </header>

        {activeSubject ? (
          /* Active Interactive Workspace */
          <div className="animate-fadeIn">
            {renderActiveActivity()}
          </div>
        ) : (
          /* Main classroom choices */
          <div className="space-y-8 animate-fadeIn">
            
            {/* Peach / Pink connected greeting widget banner */}
            <div className="bg-gradient-to-r from-rose-100 to-amber-100/70 border border-rose-200/50 rounded-3xl p-6 md:p-8 flex items-center gap-5 relative overflow-hidden shadow-sm">
              <div className="absolute top-2 right-2 opacity-5 select-none text-7xl font-black">✏️</div>
              
              {/* Cycling/running active custom avatar circle */}
              <div className="w-16 h-16 bg-white border-2 border-neutral-900 rounded-2xl flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)] shrink-0 select-none transform hover:scale-105 transition duration-200 overflow-hidden">
                {currentStudent?.photoUrl ? (
                  <img src={currentStudent.photoUrl} alt={studentName} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl" role="img" aria-label="avatar">
                    {currentStudent?.avatar || "🚴"}
                  </span>
                )}
              </div>
              
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-neutral-800 tracking-tight flex items-center gap-2">
                  Bonjour {studentName} ! <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400 animate-pulse" />
                </h2>
                <p className="text-sm md:text-base text-neutral-600 font-sans font-medium mt-1">
                  Que veux-tu faire aujourd'hui ? Choisis une matière ci-dessous pour t'entraîner !
                </p>
              </div>
            </div>

            {/* Section heading */}
            <div className="flex items-center gap-1">
              <span className="text-xl" role="img" aria-label="pencil">✏️</span>
              <h3 className="font-display font-bold text-xl text-neutral-800 tracking-tight">
                Choisis une matière...
              </h3>
            </div>

            {/* Responsive grid with 4 minimalist category cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
              {SUBJECTS_DATA.map((sub) => {
                // Determine colors based on category id
                const pathColors = {
                  francais: "hover:border-indigo-300 focus-within:ring-indigo-100 bg-white",
                  mathematiques: "hover:border-sky-300 focus-within:ring-sky-100 bg-white",
                  eveil: "hover:border-emerald-300 focus-within:ring-emerald-100 bg-white",
                  jeux: "hover:border-amber-300 focus-within:ring-amber-100 bg-white"
                };

                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubject(sub.id)}
                    className={`text-left rounded-3xl border-2 border-neutral-100 ${pathColors[sub.id]} p-4 flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-4 group`}
                  >
                    {/* Header line containing color dot and visual indicator */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${sub.dotColor} shadow-xs`}></span>
                        <h4 className="font-display font-bold text-xl text-neutral-800 group-hover:text-neutral-900 leading-none">
                          {sub.title}
                        </h4>
                      </div>
                      
                      {/* Interactive arrow floating */}
                      <span className="text-neutral-300 group-hover:text-neutral-600 transition-colors duration-200 transform translate-x-0 group-hover:translate-x-1 duration-200">
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>

                    {/* Minimalist Modern Illustration Vector container */}
                    <div className="rounded-xl overflow-hidden border border-neutral-100/50">
                      <MinimalistCategoryIcon id={sub.id} />
                    </div>

                    {/* Caption description footer */}
                    <div>
                      <p className="text-xs font-mono font-bold tracking-wide text-neutral-400 group-hover:text-neutral-500 uppercase mb-1">
                        Détail du cours :
                      </p>
                      <p className="text-sm font-sans font-medium text-neutral-500 group-hover:text-neutral-700 leading-normal line-clamp-2">
                        {sub.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom school banner footer showing stats info */}
            <footer className="border-t border-neutral-200/60 pt-6 text-center text-xs text-neutral-400 font-mono tracking-wider">
               Waimes Centre • Plateforme Éducative 5e & 6e Primaire • {new Date().getFullYear()}
            </footer>

          </div>
        )}
      </div>
    </div>
  );
}
