"use client";

import { useState } from "react";
import type { PracticeWord } from "@/data/lessons";

type Props = {
  words: PracticeWord[];
  columns?: number;
};

function HighlightedWord({
  word,
  highlight,
  onClick,
  isActive,
}: {
  word: string;
  highlight?: { start: number; end: number };
  onClick: () => void;
  isActive: boolean;
}) {
  const chars = [...word];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full px-4 py-5 text-center transition hover:bg-lesson-green/10 ${
        isActive ? "bg-lesson-green/15 audio-playing" : ""
      }`}
    >
      <span className="font-arabic text-2xl sm:text-3xl">
        {chars.map((char, i) => {
          const isHighlighted =
            highlight && i >= highlight.start && i < highlight.end;
          return (
            <span
              key={i}
              className={isHighlighted ? "text-pink-highlight" : "text-foreground"}
            >
              {char}
            </span>
          );
        })}
      </span>
    </button>
  );
}

export default function PracticeWordsGrid({ words, columns = 2 }: Props) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleClick = (idx: number, word: string) => {
    setActiveIdx(idx);
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "ar-SA";
      utterance.rate = 0.7;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
    setTimeout(() => setActiveIdx(null), 2000);
  };

  const rows: PracticeWord[][] = [];
  for (let i = 0; i < words.length; i += columns) {
    rows.push(words.slice(i, i + columns));
  }

  return (
    <div className="lesson-border mx-auto max-w-2xl overflow-hidden rounded-lg bg-white">
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={`grid border-b border-lesson-green/30 last:border-b-0 ${
            rowIdx % 2 === 0 ? "lesson-row-odd" : "lesson-row-even"
          }`}
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {row.map((item, colIdx) => {
            const idx = rowIdx * columns + colIdx;
            return (
              <div
                key={idx}
                className="border-r border-lesson-green/20 last:border-r-0"
              >
                <HighlightedWord
                  word={item.word}
                  highlight={item.highlight}
                  onClick={() => handleClick(idx, item.word)}
                  isActive={activeIdx === idx}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
