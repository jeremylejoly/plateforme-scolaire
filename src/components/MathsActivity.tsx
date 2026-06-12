import React, { useState, useEffect, useRef } from "react";
import { Calculator, Play, RefreshCw, Star, Trophy, Zap, AlertCircle } from "lucide-react";

interface MathsActivityProps {
  onBack: () => void;
  studentName: string;
}

type MathLevel = "facile" | "moyen" | "difficile";

interface Question {
  text: string;
  answer: number | string;
  choices: (number | string)[];
}

export default function MathsActivity({ onBack, studentName }: MathsActivityProps) {
  const [level, setLevel] = useState<MathLevel>("moyen");
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<number | string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameOver, setGameOver] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Generate question based on level
  const generateQuestion = (): Question => {
    let num1 = 0;
    let num2 = 0;
    let operator = "+";
    let answer: number | string = 0;
    let text = "";

    if (level === "facile") {
      // Additions & Subtractions
      const ops = ["+", "-"];
      operator = ops[Math.floor(Math.random() * ops.length)];
      if (operator === "+") {
        num1 = Math.floor(Math.random() * 80) + 10;
        num2 = Math.floor(Math.random() * 80) + 10;
        answer = num1 + num2;
      } else {
        num1 = Math.floor(Math.random() * 90) + 10;
        num2 = Math.floor(Math.random() * num1); // Positive result
        answer = num1 - num2;
      }
      text = `${num1} ${operator} ${num2}`;
    } else if (level === "moyen") {
      // Multiplications & Division
      const ops = ["x", "÷"];
      operator = ops[Math.floor(Math.random() * ops.length)];
      if (operator === "x") {
        num1 = Math.floor(Math.random() * 11) + 2; // 2-12
        num2 = Math.floor(Math.random() * 9) + 2; // 2-10
        answer = num1 * num2;
      } else {
        const dividendChoices = [6, 8, 9, 7, 5, 4, 3].map(n => {
          const factor = Math.floor(Math.random() * 9) + 2;
          return { original: n * factor, divisor: n, ans: factor };
        });
        const chosen = dividendChoices[Math.floor(Math.random() * dividendChoices.length)];
        num1 = chosen.original;
        num2 = chosen.divisor;
        answer = chosen.ans;
      }
      text = `${num1} ${operator} ${num2}`;
    } else {
      // Difficult level - decimals & fractions
      const types = ["fraction", "decimal"];
      const chosenType = types[Math.floor(Math.random() * types.length)];
      if (chosenType === "fraction") {
        const frs = [
          { text: "1/2 + 1/4", ans: "3/4", choices: ["3/4", "2/6", "1/6", "2/4"] },
          { text: "1/3 + 1/3", ans: "2/3", choices: ["2/3", "2/6", "1/6", "1/9"] },
          { text: "1 - 1/3", ans: "2/3", choices: ["2/3", "1/3", "3/3", "4/3"] },
          { text: "2/4 + 1/4", ans: "3/4", choices: ["3/4", "3/8", "2/8", "1"] },
          { text: "1/2 + 1/2", ans: "1", choices: ["1", "2/4", "1/4", "2"] }
        ];
        const item = frs[Math.floor(Math.random() * frs.length)];
        return {
          text: item.text,
          answer: item.ans,
          choices: shuffleArray([...item.choices])
        };
      } else {
        // Decimal numbers
        const d1 = (Math.floor(Math.random() * 20) + 5) / 10; // 0.5 - 2.5
        const d2 = (Math.floor(Math.random() * 20) + 5) / 10; // 0.5 - 2.5
        const ops = ["+", "-"];
        operator = ops[Math.floor(Math.random() * ops.length)];
        if (operator === "+") {
          answer = parseFloat((d1 + d2).toFixed(2));
        } else {
          const larger = Math.max(d1, d2);
          const smaller = Math.min(d1, d2);
          answer = parseFloat((larger - smaller).toFixed(2));
          text = `${larger} - ${smaller}`;
          const incorrects = [
            parseFloat((answer + 0.1).toFixed(2)),
            parseFloat((answer - 0.1).toFixed(2)),
            parseFloat((answer * 2).toFixed(2)),
            parseFloat((answer + 1).toFixed(2))
          ];
          const rawChoices = Array.from(new Set([answer, ...incorrects])).slice(0, 4);
          while (rawChoices.length < 4) {
            rawChoices.push(parseFloat((Math.random() * 5).toFixed(2)));
          }
          return {
            text,
            answer,
            choices: shuffleArray(rawChoices)
          };
        }
        text = `${d1} + ${d2}`;
      }
    }

    // Generate numeric choices
    const incorrectChoices: (number | string)[] = [];
    while (incorrectChoices.length < 3) {
      const offset = (Math.floor(Math.random() * 5) + 1) * (Math.random() > 0.5 ? 1 : -1);
      const wrongVal = (answer as number) + offset;
      if (wrongVal >= 0 && wrongVal !== answer && !incorrectChoices.includes(wrongVal)) {
        incorrectChoices.push(wrongVal);
      }
    }

    const choices = shuffleArray([answer, ...incorrectChoices]);
    return { text, answer, choices };
  };

  const shuffleArray = (arr: any[]) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  const startTraining = () => {
    setIsPlaying(true);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setQuestionCount(1);
    setGameOver(false);
    setIsAnswered(false);
    setSelectedChoice(null);
    setCurrentQuestion(generateQuestion());
    setTimeLeft(15);
  };

  // Timer effect
  useEffect(() => {
    if (isPlaying && !isAnswered && !gameOver) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Time out - handle as incorrect
            clearInterval(timerRef.current!);
            handleTimeOut();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isAnswered, gameOver, questionCount]);

  const handleTimeOut = () => {
    setIsAnswered(true);
    setSelectedChoice("");
    setStreak(0);
  };

  const handleChoiceSelect = (choice: number | string) => {
    if (isAnswered) return;
    setSelectedChoice(choice);
    setIsAnswered(true);
    if (timerRef.current) clearInterval(timerRef.current);

    if (choice === currentQuestion?.answer) {
      setScore((prev) => prev + 10);
      setStreak((prev) => {
        const next = prev + 1;
        if (next > bestStreak) setBestStreak(next);
        return next;
      });
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (questionCount >= 10) {
      setGameOver(true);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      setIsAnswered(false);
      setSelectedChoice(null);
      setCurrentQuestion(generateQuestion());
      setQuestionCount((prev) => prev + 1);
      setTimeLeft(15);
    }
  };

  const resetGame = () => {
    setIsPlaying(false);
    setGameOver(false);
    setScore(0);
    setStreak(0);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 max-w-3xl mx-auto border border-sky-100 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-sky-400 to-blue-500"></div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-sky-100 text-sky-700 p-2 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <span className="font-display font-semibold text-lg text-neutral-800">Cerveau-Maths — Calcul Cerveau</span>
        </div>
        <button
          onClick={onBack}
          className="text-neutral-500 hover:text-neutral-800 bg-neutral-100 hover:bg-neutral-200 duration-200 px-4 py-1.5 rounded-full text-sm font-medium"
        >
          Retour au menu
        </button>
      </div>

      {!isPlaying && !gameOver ? (
        <div className="text-center py-6">
          <h3 className="text-2xl font-display font-bold text-neutral-800 mb-2">Entraînement de calcul mental ⚡</h3>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">
            Dispute 10 équations de calcul rapides pour stimuler tes neurones de 5ème et 6ème primaire. Prêt ?
          </p>

          <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 max-w-md mx-auto mb-8">
            <h4 className="font-semibold text-neutral-700 mb-4">Choisis ton niveau de difficulté :</h4>
            <div className="grid grid-cols-3 gap-2">
              {(["facile", "moyen", "difficile"] as MathLevel[]).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`py-3 px-2 rounded-xl font-display text-sm font-semibold capitalize border-2 transition-all duration-200 ${
                    level === lvl
                      ? "bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-100"
                      : "bg-white text-neutral-600 border-neutral-200 hover:border-sky-200 hover:bg-sky-50/50"
                  }`}
                >
                  {lvl === "facile" ? "🐣 Facile" : lvl === "moyen" ? "🦊 Moyen" : "🦁 Difficile"}
                </button>
              ))}
            </div>

            <div className="mt-4 text-xs font-mono text-neutral-400">
              {level === "facile" && "• Additions & soustractions (10-99)"}
              {level === "moyen" && "• Multiplications & divisions rapides (tables)"}
              {level === "difficile" && "• Fractions visuelles & nombres décimaux courants"}
            </div>
          </div>

          <button
            onClick={startTraining}
            className="px-8 py-4 bg-sky-600 text-white rounded-2xl font-display font-semibold shadow-lg shadow-sky-100 hover:bg-sky-700 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 mx-auto"
          >
            <Play className="w-5 h-5 fill-current" />
            Lancer l'entraînement
          </button>
        </div>
      ) : isPlaying && !gameOver && currentQuestion ? (
        <div>
          {/* Top Status Bar Grid */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl text-center">
              <div className="text-xs font-mono font-medium text-neutral-400">ÉQUATION</div>
              <div className="text-lg font-display font-semibold text-neutral-800">{questionCount} / 10</div>
            </div>
            <div className="bg-sky-50/50 border border-sky-100 p-3 rounded-2xl text-center">
              <div className="text-xs font-mono font-medium text-sky-500">POINTS</div>
              <div className="text-lg font-display font-bold text-sky-700">{score}</div>
            </div>
            <div className="bg-amber-50/50 border border-amber-100 p-3 rounded-2xl text-center relative overflow-hidden">
              <div className="text-xs font-mono font-medium text-amber-600">STREAK ⚡</div>
              <div className="text-lg font-display font-black text-amber-700">{streak}</div>
              {streak >= 3 && (
                <div className="absolute top-1 right-1">
                  <Zap className="w-3 h-3 text-amber-500 fill-amber-400 animate-pulse" />
                </div>
              )}
            </div>
            <div className={`p-3 rounded-2xl text-center border transition-colors duration-200 ${
              timeLeft <= 4 
                ? "bg-rose-50 border-rose-200 text-rose-700 font-bold" 
                : "bg-slate-50 border-slate-100 text-neutral-700"
            }`}>
              <div className="text-xs font-mono font-medium opacity-65">CHRONO</div>
              <div className="text-lg font-display font-semibold">{timeLeft}s</div>
            </div>
          </div>

          {/* Equation Showcase */}
          <div className="bg-slate-900 rounded-3xl p-8 mb-6 text-center shadow-inner relative overflow-hidden border border-slate-800">
            {/* Minimal glowing retro grid background */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            
            <div className="relative">
              <span className="text-slate-500 text-sm font-mono tracking-widest block uppercase mb-2">CALCULE RAPIDEMENT :</span>
              <h2 className="text-4xl md:text-5xl font-mono font-black text-white tracking-wide animate-pulse inline-block">
                {currentQuestion.text} = ?
              </h2>
            </div>
          </div>

          {/* Choices layout */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {currentQuestion.choices.map((choice) => {
              const isSelected = selectedChoice === choice;
              const isCorrectAnswer = choice === currentQuestion.answer;
              let choiceBtnStyle = "border-neutral-200 hover:border-sky-300 hover:bg-sky-50/20";

              if (isAnswered) {
                if (isCorrectAnswer) {
                  choiceBtnStyle = "border-emerald-500 bg-emerald-50 text-emerald-800 font-semibold ring-2 ring-emerald-200";
                } else if (isSelected) {
                  choiceBtnStyle = "border-rose-400 bg-rose-50 text-rose-800";
                } else {
                  choiceBtnStyle = "opacity-40 border-neutral-100 cursor-not-allowed";
                }
              }

              return (
                <button
                  key={choice}
                  disabled={isAnswered}
                  onClick={() => handleChoiceSelect(choice)}
                  className={`py-4 px-3 rounded-2xl border-2 font-mono font-bold text-center text-xl transition-all duration-150 ${choiceBtnStyle}`}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          {/* Message feedback */}
          {isAnswered && (
            <div className="mb-6 text-center animate-fadeIn">
              {selectedChoice === currentQuestion.answer ? (
                <div className="inline-flex items-center gap-2 text-emerald-600 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-xl text-sm font-semibold">
                  <Star className="w-4 h-4 fill-current" /> Bravo ! Réponse correcte ! (+10 pts)
                </div>
              ) : selectedChoice === "" ? (
                <div className="inline-flex items-center gap-2 text-rose-500 bg-rose-50 border border-rose-100 px-4 py-2 rounded-xl text-sm font-semibold">
                  <AlertCircle className="w-4 h-4" /> Le temps est écoulé ! Réponse : {currentQuestion.answer}
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 text-rose-500 bg-rose-50 border border-rose-100 px-4 py-2 rounded-xl text-sm font-semibold">
                  <XCircle className="w-4 h-4" /> Oups ! La réponse correcte était : {currentQuestion.answer}
                </div>
              )}
            </div>
          )}

          {/* Controls */}
          {isAnswered && (
            <div className="flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="px-6 py-3 bg-sky-600 text-white rounded-xl font-display font-semibold shadow-md shadow-sky-100 hover:bg-sky-700 transition"
              >
                {questionCount === 10 ? "Voir mon score math" : "Équation suivante →"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-6 animate-fadeIn">
          <div className="inline-flex justify-center items-center bg-sky-100 text-sky-700 w-16 h-16 rounded-full mb-6">
            <Trophy className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-display font-bold text-slate-800 mb-2">Entraînement terminé, {studentName} !</h3>
          <p className="text-neutral-500 mb-6 font-display max-w-sm mx-auto">
            Tu viens de clore la série d'exercices de mathématiques rapides de Waimes !
          </p>

          <div className="bg-slate-50 border border-neutral-100 p-6 rounded-2xl max-w-sm mx-auto mb-8 grid grid-cols-2 gap-4">
            <div className="text-center border-r border-neutral-200">
              <div className="text-xs font-mono text-neutral-400">SCORE FINAL</div>
              <div className="text-3xl font-display font-black text-sky-600">{score} pts</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-mono text-neutral-400">MEILLEUR COMBO</div>
              <div className="text-3xl font-display font-black text-amber-600">⚡ {bestStreak}</div>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={startTraining}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-sky-200 text-sky-700 hover:bg-sky-50 text-sm font-medium transition"
            >
              <RefreshCw className="w-4 h-4" /> Réessayer
            </button>
            <button
              onClick={onBack}
              className="px-5 py-2.5 bg-sky-600 text-white hover:bg-sky-700 rounded-xl text-sm font-medium transition shadow-md shadow-sky-100"
            >
              Retourner aux cours
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Inline fallback for missing XCircle in scope prevent crash
function XCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}
