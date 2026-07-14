import Link from "next/link";
import type { Lesson } from "@/data/lessons";
import AlphabetGrid from "./AlphabetGrid";
import PracticeWordsGrid from "./PracticeWordsGrid";
import LetterFormsGrid from "./LetterFormsGrid";

type Props = {
  lesson: Lesson;
};

export default function LessonViewer({ lesson }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      {/* Chapter header */}
      <div className="mb-6 text-center">
        <p className="font-arabic text-sm text-lesson-green">
          {lesson.chapterAr}
        </p>
        <p className="text-xs text-foreground/50">{lesson.chapter}</p>
      </div>

      {/* Lesson title box */}
      <div className="lesson-border mb-8 rounded-lg bg-white px-6 py-5 text-center">
        <h1 className="font-arabic text-2xl text-pink-highlight sm:text-3xl">
          {lesson.titleAr}
        </h1>
        <p className="mt-2 text-sm text-foreground/60">{lesson.title}</p>

        {lesson.topicBadge && (
          <span className="mt-3 inline-block rounded border border-lesson-green bg-lesson-green-light px-4 py-1 font-arabic text-lg text-pink-highlight">
            {lesson.topicBadge}
          </span>
        )}
      </div>

      {lesson.subtitle && (
        <div className="mb-6 text-center">
          <span className="inline-block rounded-full border border-lesson-green bg-lesson-green-light px-5 py-1.5 text-sm font-medium text-lesson-green">
            {lesson.subtitleAr}
          </span>
          <p className="mt-1 text-xs text-foreground/50">{lesson.subtitle}</p>
        </div>
      )}

      {lesson.instructions && (
        <p className="mb-8 text-center text-sm leading-relaxed text-foreground/70">
          {lesson.instructions}
        </p>
      )}

      {/* Lesson content */}
      {lesson.type === "alphabet" && lesson.alphabet && (
        <AlphabetGrid letters={lesson.alphabet} />
      )}

      {lesson.type === "letter-forms" && lesson.letterForms && (
        <LetterFormsGrid forms={lesson.letterForms} />
      )}

      {lesson.type === "practice-words" && lesson.practiceWords && (
        <PracticeWordsGrid words={lesson.practiceWords} />
      )}

      {/* Audio note */}
      <div className="mt-8 flex items-center justify-center gap-2 text-sm text-foreground/50">
        <svg className="h-5 w-5 text-lesson-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-6.5-4.5a7.5 7.5 0 0113 0" />
        </svg>
        <span>Click any item to hear pronunciation</span>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between border-t border-lesson-green/20 pt-8">
        <Link
          href="/curriculum"
          className="text-sm text-lesson-green hover:underline"
        >
          ← Back to Curriculum
        </Link>
        <Link
          href="/enroll"
          className="rounded-full bg-lesson-green px-5 py-2 text-sm font-medium text-white transition hover:bg-green-dark"
        >
          Enroll to Access All Lessons
        </Link>
      </div>
    </article>
  );
}
