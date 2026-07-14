import type { Metadata } from "next";
import Link from "next/link";
import { modules } from "@/data/curriculum";

export const metadata: Metadata = {
  title: "Curriculum | Bushra Academy",
  description:
    "Explore the 9-month Quran Journey curriculum: Foundations, Expansion, and Completion modules.",
};

const colorMap = {
  green: {
    bg: "bg-green-module",
    dark: "bg-green-dark",
    text: "text-green-module",
    ring: "ring-green-module/30",
  },
  orange: {
    bg: "bg-orange-module",
    dark: "bg-orange-dark",
    text: "text-orange-module",
    ring: "ring-orange-module/30",
  },
  red: {
    bg: "bg-red-module",
    dark: "bg-red-dark",
    text: "text-red-module",
    ring: "ring-red-module/30",
  },
};

export default function CurriculumPage() {
  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="stars-bg px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            Quran Journey Curriculum
          </h1>
          <p className="mt-4 text-lg text-white/70">
            A structured 9-month path from Tajweed foundations to completing
            the entire Qur&apos;an.
          </p>
        </div>
      </section>

      {/* Timeline overview */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-lesson-green/20 md:block" />

            {modules.map((mod, idx) => {
              const colors = colorMap[mod.color];
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={mod.id}
                  className={`relative mb-12 md:mb-16 ${
                    isEven ? "md:pr-[55%]" : "md:pl-[55%]"
                  }`}
                >
                  <div
                    className={`absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full ring-4 md:block ${colors.bg} ${colors.ring}`}
                  />

                  <div className="rounded-xl bg-white p-6 shadow-md ring-1 ring-lesson-green/10 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full ${colors.bg} px-4 py-1 text-sm font-medium text-white`}
                      >
                        Module {mod.number}
                      </span>
                      <span className="text-sm text-foreground/50">
                        {mod.weeks}
                      </span>
                    </div>

                    <h2 className="font-display mt-4 text-2xl font-semibold text-teal-deep">
                      {mod.title}
                    </h2>
                    <p className={`mt-1 text-sm font-medium ${colors.text}`}>
                      {mod.outcome}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {mod.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-foreground/70"
                        >
                          <span
                            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${colors.bg}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`mt-5 inline-block rounded ${colors.dark} px-4 py-2 text-sm font-medium text-white`}
                    >
                      {mod.action}
                    </div>

                    {mod.lessons.length > 0 && (
                      <div className="mt-6 border-t border-lesson-green/10 pt-5">
                        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-foreground/40">
                          Sample Lessons
                        </p>
                        <div className="space-y-2">
                          {mod.lessons.map((lesson) => (
                            <Link
                              key={lesson.slug}
                              href={`/lessons/${lesson.slug}`}
                              className="group flex items-center justify-between rounded-lg border border-lesson-green/10 px-4 py-3 transition hover:border-lesson-green/30 hover:bg-lesson-green-light/50"
                            >
                              <div>
                                <p className="font-arabic text-sm text-pink-highlight">
                                  {lesson.titleAr}
                                </p>
                                <p className="text-xs text-foreground/50">
                                  {lesson.title}
                                </p>
                              </div>
                              <span className="text-lesson-green opacity-0 transition group-hover:opacity-100">
                                →
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-lesson-green/10 bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-2xl font-semibold text-teal-deep">
            Ready to start?
          </h2>
          <p className="mt-3 text-foreground/70">
            Enrollment opens for each 9-month cohort. Reserve your place today.
          </p>
          <Link
            href="/enroll"
            className="mt-6 inline-block rounded-full bg-gold px-8 py-3 font-medium text-teal-deep transition hover:bg-gold-light"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
}
