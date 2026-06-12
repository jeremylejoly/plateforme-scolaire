import React, { useState } from "react";
import { EVEIL_QUESTIONS } from "../data/subjectActivities";
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Award, Globe, Compass, Stars, Map } from "lucide-react";

interface EveilActivityProps {
  onBack: () => void;
  studentName: string;
}

export default function EveilActivity({ onBack, studentName }: EveilActivityProps) {
  const [activityType, setActivityType] = useState<"menu" | "quiz" | "europe">("menu");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = EVEIL_QUESTIONS[currentIndex];

  const handleAnswerSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
  };

  const handleVerify = () => {
    if (selectedAnswer === null || isAnswered) return;
    setIsAnswered(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    if (currentIndex < EVEIL_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 max-w-3xl mx-auto border border-emerald-100 shadow-xl relative overflow-hidden">
      {/* Decorative top shape */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-400 to-teal-500"></div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-100 text-emerald-700 p-2 rounded-xl animate-spin-[spin_10s_linear_infinite]">
            <Globe className="w-5 h-5" />
          </div>
          <span className="font-display font-semibold text-lg text-neutral-800">Éveil Géographie & Sciences</span>
        </div>
        <button
          onClick={activityType === "menu" ? onBack : () => setActivityType("menu")}
          className="text-neutral-500 hover:text-neutral-800 bg-neutral-100 hover:bg-neutral-200 duration-200 px-4 py-1.5 rounded-full text-sm font-medium"
        >
          {activityType === "menu" ? "Retour au menu" : "Choisir une autre activité"}
        </button>
      </div>

      {activityType === "menu" ? (
        <div className="space-y-6 text-center py-4">
          <h3 className="text-2xl font-display font-bold text-neutral-800 mb-2">Choisis ton activité d'Éveil 🌍</h3>
          <p className="text-neutral-500 mb-6 max-w-sm mx-auto font-medium">
            Entraîne-toi sur tes connaissances en géographie, sciences et histoire de 5e et 6e primaire.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto mt-4">
            <button
              onClick={() => setActivityType("quiz")}
              className="p-6 bg-white border-2 border-neutral-100 hover:border-emerald-500 rounded-3xl flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-lg text-center cursor-pointer group"
            >
              <div className="bg-emerald-50 text-emerald-700 p-4 rounded-2xl group-hover:scale-105 transition-transform duration-200">
                <Compass className="w-8 h-8 animate-pulse" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-neutral-800">Quiz d'Éveil</h4>
                <p className="text-xs font-sans font-medium text-neutral-500 mt-1 leading-normal">
                  Explore les provinces belges, le cycle de l'eau et les grandes notions d'histoire.
                </p>
              </div>
            </button>

            <button
              onClick={() => setActivityType("europe")}
              className="p-6 bg-white border-2 border-neutral-100 hover:border-emerald-500 rounded-3xl flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-lg text-center cursor-pointer group"
            >
              <div className="bg-emerald-50 text-emerald-700 p-4 rounded-2xl group-hover:scale-105 transition-transform duration-200">
                <Map className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-neutral-800">Carte de l'Europe</h4>
                <p className="text-xs font-sans font-medium text-neutral-500 mt-1 leading-normal">
                  Replace les étiquettes (reliefs, pays et capitales) au bon endroit sur les cartes de l'Europe.
                </p>
              </div>
            </button>
          </div>
        </div>
      ) : activityType === "europe" ? (
        <div className="animate-fadeIn w-full">
          <iframe
            src="/europe_cartes.html"
            title="Carte de l'Europe"
            className="w-full border-2 border-neutral-900 rounded-3xl shadow-[6px_6px_0px_rgba(0,0,0,1)] bg-neutral-50"
            style={{ height: "680px" }}
          ></iframe>
        </div>
      ) : !showResults ? (
        <div>
          {/* Progress bar */}
          <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden mb-6 flex">
            {EVEIL_QUESTIONS.map((_, idx) => (
              <div
                key={idx}
                className={`flex-1 h-full transition-all duration-300 border-r border-white last:border-0 ${
                  idx < currentIndex
                    ? "bg-emerald-500"
                    : idx === currentIndex
                    ? "bg-emerald-400 animate-pulse"
                    : "bg-neutral-200"
                }`}
              ></div>
            ))}
          </div>

          <div className="mb-4 text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" /> Explorateur d'éveil • Question {currentIndex + 1} de {EVEIL_QUESTIONS.length}
          </div>

          {/* Question Title */}
          <h3 className="text-xl md:text-2xl font-display font-medium text-neutral-900 mb-6 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-50">
            {currentQuestion.question}
          </h3>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              let btnStyle = "border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 text-neutral-800";

              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = "border-emerald-500 bg-emerald-50/80 text-emerald-800 font-semibold";
                } else if (isSelected) {
                  btnStyle = "border-rose-300 bg-rose-50 text-rose-800";
                } else {
                  btnStyle = "border-neutral-200 bg-white opacity-40 text-neutral-500";
                }
              } else if (isSelected) {
                btnStyle = "border-emerald-500 bg-emerald-50/70 text-emerald-950 font-medium ring-2 ring-emerald-400/20";
              }

              return (
                <button
                  key={option}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between text-base ${btnStyle}`}
                >
                  <span>{option}</span>
                  {isAnswered && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>

          {/* Interactive Actions / Correction detail */}
          {isAnswered ? (
            <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 mb-6 animate-fadeIn">
              <div className="flex items-start gap-3">
                <div className={`p-1.5 rounded-lg mt-0.5 ${
                  selectedAnswer === currentQuestion.correctAnswer 
                    ? "bg-emerald-100 text-emerald-700" 
                    : "bg-amber-100 text-amber-700"
                }`}>
                  <Map className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    {selectedAnswer === currentQuestion.correctAnswer ? "Magnifique Découverte !" : "Regardons de plus près :"}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {/* Bottom Action bar */}
          <div className="flex justify-end">
            {!isAnswered ? (
              <button
                onClick={handleVerify}
                disabled={selectedAnswer === null}
                className={`px-6 py-3 rounded-xl font-display font-medium text-white transition-all duration-200 ${
                  selectedAnswer === null
                    ? "bg-neutral-300 cursor-not-allowed"
                    : "bg-emerald-600 hover:bg-emerald-700 active:scale-95 shadow-md shadow-emerald-200"
                }`}
              >
                Valider l'exploration
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-xl font-display font-medium text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 flex items-center gap-2 shadow-md shadow-emerald-200"
              >
                <span>
                  {currentIndex === EVEIL_QUESTIONS.length - 1 ? "Résultats " : "Question suivante"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-8 animate-fadeIn">
          <div className="inline-flex justify-center items-center bg-emerald-100 text-emerald-700 w-20 h-20 rounded-full mb-6">
            <Award className="w-10 h-10 animate-bounce" />
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-800 mb-2">
            Félicitations, Explorateur {studentName} !
          </h3>
          <p className="text-neutral-500 mb-6 max-w-md mx-auto">
            Tu as fini cet atelier d'éveil scientifique et géographique. Quel beau parcours !
          </p>

          <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 max-w-sm mx-auto mb-8">
            <div className="text-5xl font-display font-black text-emerald-700 mb-2">
              {score} <span className="text-2xl text-emerald-400 font-normal">/ {EVEIL_QUESTIONS.length}</span>
            </div>
            <div className="text-sm font-semibold text-emerald-800">
              {score === EVEIL_QUESTIONS.length ? (
                "🏆 Maître d'Éveil exceptionnel ! Tu connais ta matière sur le bout des doigts !"
              ) : score >= 3 ? (
                "⭐️ Superbe ! Ton sens de l'observation est excellent !"
              ) : (
                "🌱 Bel effort ! Relis tes cahiers d'éveil de Waimes pour t'améliorer !"
              )}
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-emerald-200 text-emerald-700 hover:bg-emerald-50 text-sm font-medium transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Recommencer
            </button>
            <button
              onClick={onBack}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 text-sm font-medium transition-all shadow-md shadow-emerald-200"
            >
              Retourner aux cours
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
