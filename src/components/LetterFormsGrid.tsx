"use client";

import type { LetterForm } from "@/data/lessons";

type Props = {
  forms: LetterForm[];
};

export default function LetterFormsGrid({ forms }: Props) {
  return (
    <div className="space-y-8">
      {forms.map((section) => (
        <div key={section.label}>
          <div className="mb-3 flex flex-col items-center gap-1 sm:flex-row sm:justify-center">
            <span className="inline-block rounded-full border border-lesson-green bg-lesson-green-light px-4 py-1 text-xs font-medium text-lesson-green">
              {section.labelAr}
            </span>
            <span className="text-sm text-foreground/60">{section.label}</span>
          </div>

          <div className="lesson-border overflow-hidden rounded-lg bg-white">
            <div className="grid grid-cols-5 border-b border-lesson-green/30">
              {section.forms.map((form, i) => (
                <div
                  key={i}
                  className={`border-r border-lesson-green/20 px-2 py-6 text-center last:border-r-0 ${
                    Math.floor(i / 5) % 2 === 0
                      ? i % 2 === 0
                        ? "lesson-row-odd"
                        : "lesson-row-even"
                      : i % 2 === 0
                        ? "lesson-row-even"
                        : "lesson-row-odd"
                  }`}
                >
                  <span className="font-arabic text-3xl text-pink-highlight sm:text-4xl">
                    {form}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
