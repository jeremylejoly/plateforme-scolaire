import React, { useState } from "react";
import { FRANCAIS_QUESTIONS } from "../data/subjectActivities";
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Award, BookOpen, Star } from "lucide-react";

interface FrancaisActivityProps {
  onBack: () => void;
  studentName: string;
}

export default function FrancaisActivity({ onBack, studentName }: FrancaisActivityProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = FRANCAIS_QUESTIONS[currentIndex];

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
    if (currentIndex < FRANCAIS_QUESTIONS.length - 1) {
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
    <div className="bg-white rounded-3xl p-6 md:p-8 max-w-3xl mx-auto border border-purple-100 shadow-xl relative overflow-hidden">
      {/* Decorative top shape */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-violet-400 to-indigo-500"></div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-purple-100 text-purple-700 p-2 rounded-xl">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="font-display font-semibold text-lg text-neutral-800">Français — 5e & 6e primaire</span>
        </div>
        <button
          onClick={onBack}
          className="text-neutral-500 hover:text-neutral-800 bg-neutral-100 hover:bg-neutral-200 duration-200 px-4 py-1.5 rounded-full text-sm font-medium"
        >
           Retour au menu
        </button>
      </div>

      {!showResults ? (
        <div>
          {/* Progress bar */}
          <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden mb-6 flex">
            {FRANCAIS_QUESTIONS.map((_, idx) => (
              <div
                key={idx}
                className={`flex-1 h-full transition-all duration-300 border-r border-white last:border-0 ${
                  idx < currentIndex
                    ? "bg-purple-500"
                    : idx === currentIndex
                    ? "bg-purple-400 animate-pulse"
                    : "bg-neutral-200"
                }`}
              ></div>
            ))}
          </div>

          <div className="mb-4 text-xs font-mono text-purple-600 font-bold uppercase tracking-wider">
            Série d'orthographe & de grammaire • Question {currentIndex + 1} de {FRANCAIS_QUESTIONS.length}
          </div>

          {/* Question Title */}
          <h3 className="text-xl md:text-2xl font-display font-medium text-neutral-900 mb-6 bg-purple-50/50 p-4 rounded-2xl border border-purple-50">
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
                btnStyle = "border-purple-500 bg-purple-50/70 text-purple-900 font-medium ring-2 ring-purple-400/20";
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
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    {selectedAnswer === currentQuestion.correctAnswer ? "Excellent !" : "Oups ! Regarde l'explication :"}
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
                    : "bg-purple-600 hover:bg-purple-700 active:scale-95 shadow-md shadow-purple-200"
                }`}
              >
                Vérifier ma réponse
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-xl font-display font-medium text-white bg-purple-600 hover:bg-purple-700 active:scale-95 flex items-center gap-2 shadow-md shadow-purple-200"
              >
                <span>
                  {currentIndex === FRANCAIS_QUESTIONS.length - 1 ? "Voir mon score " : "Question suivante"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-8 animate-fadeIn">
          <div className="inline-flex justify-center items-center bg-purple-100 text-purple-700 w-20 h-20 rounded-full mb-6">
            <Award className="w-10 h-10 animate-bounce" />
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-800 mb-2">
            Félicitations, {studentName} !
          </h3>
          <p className="text-neutral-500 mb-6 max-w-md mx-auto">
            Tu as terminé l'entraînement de français pour les 5ème et 6ème primaires. Voici ton résultat :
          </p>

          <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-6 max-w-sm mx-auto mb-8">
            <div className="text-5xl font-display font-black text-purple-700 mb-2">
              {score} <span className="text-2xl text-purple-400 font-normal">/ {FRANCAIS_QUESTIONS.length}</span>
            </div>
            <div className="text-sm font-semibold text-purple-800">
              {score === FRANCAIS_QUESTIONS.length ? (
                "🏆 Sans faute exceptionnel ! Chapeau !"
              ) : score >= 3 ? (
                "⭐️ Très bon travail, continue comme ça !"
              ) : (
                "💪 Pas mal ! Relis tes exercices et réessaie !"
              )}
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm font-medium transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Recommencer
            </button>
            <button
              onClick={onBack}
              className="px-5 py-2.5 rounded-xl bg-purple-600 text-white hover:bg-purple-700 text-sm font-medium transition-all shadow-md shadow-purple-200"
            >
              Retourner aux cours
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
