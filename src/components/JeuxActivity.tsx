import React, { useState, useEffect } from "react";
import { JEUX_WORDS } from "../data/subjectActivities";
import { Gamepad2, RotateCcw, HelpCircle, Star, Sparkles, Smile } from "lucide-react";

interface JeuxActivityProps {
  onBack: () => void;
  studentName: string;
}

export default function JeuxActivity({ onBack, studentName }: JeuxActivityProps) {
  const [wordData, setWordData] = useState({ word: "", hint: "" });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [status, setStatus] = useState<"playing" | "won" | "lost">("playing");
  const maxMistakes = 6;

  useEffect(() => {
    startNewGame();
  }, []);

  const getRandomWord = () => {
    const list = JEUX_WORDS;
    return list[Math.floor(Math.random() * list.length)];
  };

  const startNewGame = () => {
    const selected = getRandomWord();
    setWordData({
      word: selected.word.toUpperCase(),
      hint: selected.hint
    });
    setGuessedLetters([]);
    setMistakes(0);
    setStatus("playing");
  };

  const handleLetterGuess = (letter: string) => {
    if (status !== "playing" || guessedLetters.includes(letter)) return;
    
    const newGuesses = [...guessedLetters, letter];
    setGuessedLetters(newGuesses);

    if (!wordData.word.includes(letter)) {
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      if (newMistakes >= maxMistakes) {
        setStatus("lost");
      }
    } else {
      // Check if all letters in word are guessed
      const allGuessed = Array.from(wordData.word).every((char) => newGuesses.includes(char));
      if (allGuessed) {
        setStatus("won");
      }
    }
  };

  // Keyboard handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (status !== "playing") return;
      const key = e.key.toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        handleLetterGuess(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [guessedLetters, mistakes, status, wordData]);

  // Alphabet letters
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 max-w-3xl mx-auto border border-amber-100 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-400 to-orange-500"></div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-amber-100 text-amber-700 p-2 rounded-xl">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <span className="font-display font-semibold text-lg text-neutral-800">Le Mot Mystère — Vocabulaire</span>
        </div>
        <button
          onClick={onBack}
          className="text-neutral-500 hover:text-neutral-800 bg-neutral-100 hover:bg-neutral-200 duration-200 px-4 py-1.5 rounded-full text-sm font-medium"
        >
          Retour au menu
        </button>
      </div>

      <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-4 mb-6 flex items-start gap-3">
        <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider block">Indice du Prof :</span>
          <p className="text-sm text-amber-900 font-medium">{wordData.hint}</p>
        </div>
      </div>

      {/* Main Game Screen */}
      <div className="flex flex-col items-center">
        {/* Visual Gallow/Flower representation with clean beautiful CSS/SVGs */}
        <div className="mb-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxMistakes }).map((_, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                i < mistakes
                  ? "bg-rose-500 border-rose-600 scale-95 opacity-80"
                  : "bg-amber-100 border-amber-300 scale-100"
              }`}
              title={`Essai ${i + 1}`}
            ></div>
          ))}
          <span className="text-xs font-mono text-neutral-400 ml-2 font-bold uppercase">
             {maxMistakes - mistakes} chances restantes
          </span>
        </div>

        {/* Word display */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 mb-8">
          {Array.from(wordData.word).map((letter, idx) => {
            const revealed = guessedLetters.includes(letter);
            return (
              <div
                key={idx}
                className={`w-10 h-12 md:w-12 md:h-14 rounded-xl border-2 flex items-center justify-center text-xl md:text-2xl font-mono font-black transition-all ${
                  revealed
                    ? "bg-amber-50 border-amber-400 text-amber-950 scale-100"
                    : "bg-neutral-50 border-neutral-200 text-transparent scale-95"
                }`}
              >
                {revealed ? letter : "_"}
              </div>
            );
          })}
        </div>

        {/* Guessed feedback status */}
        {status === "playing" ? (
          <div>
            {/* Soft Keyboard */}
            <div className="grid grid-cols-7 sm:grid-cols-9 gap-1.5 max-w-xl mx-auto justify-center mb-6">
              {ALPHABET.map((letter) => {
                const isGuessed = guessedLetters.includes(letter);
                const isInWord = wordData.word.includes(letter);
                
                let btnStyle = "bg-white text-neutral-800 border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300";
                if (isGuessed) {
                  btnStyle = isInWord 
                    ? "bg-emerald-100 border-emerald-300 text-emerald-800 font-bold" 
                    : "bg-neutral-100 border-neutral-200 text-neutral-400 cursor-not-allowed";
                }

                return (
                  <button
                    key={letter}
                    disabled={isGuessed}
                    onClick={() => handleLetterGuess(letter)}
                    className={`h-10 text-xs sm:text-sm font-mono font-black rounded-lg border flex items-center justify-center transition-all ${btnStyle}`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
            <div className="text-center text-xs font-mono text-neutral-400">
               Tu peux directement taper sur les touches physiques de ton clavier d'ordinateur !
            </div>
          </div>
        ) : status === "won" ? (
          <div className="text-center py-6 animate-fadeIn">
            <div className="inline-flex p-3 bg-emerald-100 rounded-full text-emerald-700 mb-4 animate-bounce">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-black text-emerald-800 mb-1">C'est gagné, {studentName} ! 🌟</h3>
            <p className="text-neutral-500 mb-6 font-medium text-sm">
              Tu as décodé le mot mystère <strong className="text-emerald-700">« {wordData.word} »</strong> avec brio !
            </p>
            <button
              onClick={startNewGame}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-xl transition flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="w-4 h-4" /> Rejouer un mot
            </button>
          </div>
        ) : (
          <div className="text-center py-6 animate-fadeIn">
            <div className="inline-flex p-3 bg-rose-100 rounded-full text-rose-700 mb-4 animate-pulse">
              <Smile className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-black text-rose-800 mb-1">Mince ! Retente ta chance !</h3>
            <p className="text-neutral-500 mb-6 font-medium text-sm">
              Le mot mystère était <strong className="text-rose-700">« {wordData.word} »</strong>. Tu feras mieux au prochain !
            </p>
            <button
              onClick={startNewGame}
              className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-medium text-sm rounded-xl transition flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="w-4 h-4" /> Essayer un autre mot
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
