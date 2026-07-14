"use client";

import { useState, useCallback } from "react";
import type { AlphabetLetter } from "@/data/lessons";

type Props = {
  letters: AlphabetLetter[];
};

export default function AlphabetGrid({ letters }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const handleClick = useCallback((letter: AlphabetLetter) => {
    setActive(letter.letter);
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(letter.name);
      utterance.lang = "ar-SA";
      utterance.rate = 0.8;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
    setTimeout(() => setActive(null), 1500);
  }, []);

  const rows = [
    letters.slice(0, 4),
    letters.slice(4, 7),
    letters.slice(7, 11),
    letters.slice(11, 15),
    letters.slice(15, 19),
    letters.slice(19, 23),
    letters.slice(23, 28),
  ];

  return (
    <div className="lesson-border mx-auto max-w-2xl overflow-hidden rounded-lg bg-white">
      <div className="border-b-2 border-lesson-green bg-lesson-green-light px-4 py-3 text-center">
        <p className="font-arabic text-sm text-lesson-green">
          اضْغَطْ عَلَى الحَرْفِ لِلسَّمَاعِ
        </p>
        <p className="text-xs text-foreground/60">
          Click a letter to hear its name
        </p>
      </div>

      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={`grid border-b border-lesson-green/30 last:border-b-0 ${
            rowIdx % 2 === 0 ? "lesson-row-odd" : "lesson-row-even"
          }`}
          style={{ gridTemplateColumns: `repeat(${row.length}, 1fr)` }}
        >
          {row.map((item) => (
            <button
              key={item.letter}
              type="button"
              onClick={() => handleClick(item)}
              className={`group flex flex-col items-center justify-center border-r border-lesson-green/20 px-2 py-5 transition last:border-r-0 hover:bg-lesson-green/10 ${
                active === item.letter ? "bg-lesson-green/20 audio-playing" : ""
              }`}
            >
              <span className="font-arabic text-4xl text-foreground sm:text-5xl">
                {item.letter}
              </span>
              <span className="mt-1 text-xs text-foreground/50 opacity-0 transition group-hover:opacity-100">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
