import React, { useState } from "react";
import MinimalistCategoryIcon from "./MinimalistCategoryIcon";
import FrancaisActivity from "./FrancaisActivity";
import MathsActivity from "./MathsActivity";
import EveilActivity from "./EveilActivity";
import JeuxActivity from "./JeuxActivity";
import { LogOut, ArrowRight, Sparkles, BookOpen, Calculator, Globe, Gamepad2, GraduationCap, X, Download, Maximize2, Copy, Check } from "lucide-react";
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
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentStudent = DEFAULT_STUDENTS.find(
    (s) => s.name.toLowerCase() === studentName.toLowerCase()
  );

  const copyImageToClipboard = async () => {
    if (!currentStudent?.photoUrl) return;
    try {
      const response = await fetch(currentStudent.photoUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob })
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      // Fallback: download image directly
      downloadAvatar();
    }
  };

  const downloadAvatar = () => {
    if (!currentStudent?.photoUrl) return;
    const link = document.createElement("a");
    link.href = currentStudent.photoUrl;
    link.download = `avatar_${studentName.toLowerCase()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

          <div className="flex items-center gap-3 relative z-10">
            <button
              onClick={() => setShowAvatarModal(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 border-2 border-neutral-900 rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,1)] transition duration-200 active:scale-95 cursor-pointer group"
              title="Voir mon avatar en grand"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-neutral-900 bg-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                {currentStudent?.photoUrl ? (
                  <img src={currentStudent.photoUrl} alt={studentName} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-base" role="img" aria-label="avatar">{currentStudent?.avatar || "🚴"}</span>
                )}
              </div>
              <span className="font-display font-bold text-xs md:text-sm text-neutral-800">{studentName}</span>
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-3.5 py-2 bg-rose-50 hover:bg-rose-100 border-2 border-neutral-900 text-rose-700 font-display font-bold text-xs md:text-sm rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,1)] transition duration-200 active:scale-95 cursor-pointer"
              title="Se déconnecter"
            >
              <LogOut className="w-4 h-4" />
              <span>Changer d'élève</span>
            </button>
          </div>
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
            <div className="bg-gradient-to-r from-rose-100 to-amber-100/70 border-2 border-neutral-900 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <div className="absolute top-2 right-2 opacity-5 select-none text-7xl font-black">✏️</div>
              
              {/* Clickable Custom Avatar frame */}
              <button
                type="button"
                onClick={() => setShowAvatarModal(true)}
                className="group relative w-20 h-20 bg-white border-2 border-neutral-900 rounded-2xl flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)] shrink-0 cursor-pointer transform hover:scale-105 transition-all duration-200 overflow-hidden focus:outline-none focus:ring-4 focus:ring-amber-400"
                title="Clique pour voir ton avatar en grand !"
              >
                {currentStudent?.photoUrl ? (
                  <img src={currentStudent.photoUrl} alt={studentName} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-4xl" role="img" aria-label="avatar">
                    {currentStudent?.avatar || "🚴"}
                  </span>
                )}
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <Maximize2 className="w-6 h-6 text-white drop-shadow-md" />
                </div>
              </button>
              
              <div className="text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h2 className="font-display font-black text-2xl md:text-3xl text-neutral-800 tracking-tight flex items-center gap-2">
                    Bonjour {studentName} ! <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400 animate-pulse" />
                  </h2>
                  <button
                    onClick={() => setShowAvatarModal(true)}
                    className="text-xs font-mono font-bold text-neutral-600 bg-white/80 hover:bg-white border border-neutral-300 px-2 py-0.5 rounded-full shadow-sm transition inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Maximize2 className="w-3 h-3" /> Agrandir mon avatar
                  </button>
                </div>
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
                const pathColors = {
                  francais: "hover:border-indigo-300 focus-within:ring-indigo-100 bg-white",
                  mathematiques: "hover:border-sky-300 focus-within:ring-sky-100 bg-white",
                  eveil: "hover:border-emerald-300 focus-within:ring-emerald-100 bg-white",
                  jeux: "hover:border-amber-300 focus-within:ring-amber-100 bg-white"
                }[sub.id];

                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubject(sub.id)}
                    className={`group text-left border-2 border-neutral-900 rounded-2xl p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition duration-200 cursor-pointer flex flex-col justify-between gap-4 ${pathColors}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl border border-neutral-200 bg-neutral-50 group-hover:scale-110 transition duration-200">
                          {sub.id === "francais" && <BookOpen className="w-6 h-6 text-indigo-500" />}
                          {sub.id === "mathematiques" && <Calculator className="w-6 h-6 text-sky-500" />}
                          {sub.id === "eveil" && <Globe className="w-6 h-6 text-emerald-500" />}
                          {sub.id === "jeux" && <Gamepad2 className="w-6 h-6 text-amber-500" />}
                        </div>
                        <div>
                          <h4 className="font-display font-black text-xl text-neutral-800 tracking-tight leading-tight">
                            {sub.title}
                          </h4>
                          <span className="text-xs font-mono text-neutral-400 font-medium">
                            {sub.caption}
                          </span>
                        </div>
                      </div>
                      
                      <span className="text-neutral-300 group-hover:text-neutral-600 transition-colors duration-200 transform translate-x-0 group-hover:translate-x-1 duration-200">
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>

                    <div className="rounded-xl overflow-hidden border border-neutral-100/50">
                      <MinimalistCategoryIcon id={sub.id} />
                    </div>

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

        {/* 🌟 Avatar Lightbox Modal */}
        {showAvatarModal && (
          <div 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setShowAvatarModal(false)}
          >
            <div 
              className="bg-white border-4 border-neutral-900 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-[8px_8px_0px_rgba(0,0,0,1)] relative animate-scaleUp text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowAvatarModal(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-neutral-100 hover:bg-neutral-200 border-2 border-neutral-900 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,1)] active:scale-95 transition cursor-pointer"
                title="Fermer"
              >
                <X className="w-5 h-5 text-neutral-800" />
              </button>

              {/* Title & Name */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-amber-100 border border-amber-300 rounded-full text-xs font-mono font-bold text-amber-800 mb-2">
                  🎨 MON AVATAR PERSONNALISÉ
                </span>
                <h3 className="font-display font-black text-2xl md:text-3xl text-neutral-800 tracking-tight">
                  {studentName}
                </h3>
              </div>

              {/* Large Image Frame */}
              <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 rounded-3xl border-4 border-neutral-900 overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-white mb-6">
                {currentStudent?.photoUrl ? (
                  <img 
                    src={currentStudent.photoUrl} 
                    alt={studentName} 
                    className="w-full h-full object-cover select-none" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-7xl select-none">
                    {currentStudent?.avatar || "🚴"}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-3">
                <button
                  onClick={downloadAvatar}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-display font-bold text-sm rounded-xl border-2 border-neutral-900 shadow-[3px_3px_0px_rgba(0,0,0,1)] active:scale-95 transition cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger l'image</span>
                </button>

                <button
                  onClick={copyImageToClipboard}
                  className={`flex items-center justify-center gap-2 px-4 py-3 font-display font-bold text-sm rounded-xl border-2 border-neutral-900 shadow-[3px_3px_0px_rgba(0,0,0,1)] active:scale-95 transition cursor-pointer ${
                    copied 
                      ? "bg-emerald-500 text-white" 
                      : "bg-neutral-100 hover:bg-neutral-200 text-neutral-800"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Copié dans le presse-papier !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copier l'image</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-neutral-400 font-sans">
                💡 Tu peux aussi faire un <strong>clic-droit</strong> sur l'image pour la copier ou l'enregistrer !
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
