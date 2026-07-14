import Hero from "@/components/Hero";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* How it works */}
      <section className="bg-cream px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-center text-3xl font-semibold text-teal-deep sm:text-4xl">
            How Your Journey Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-foreground/70">
            Four pages per class, structured modules, and guided progression from
            Tajweed foundations to your Khatm celebration.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Enroll",
                desc: "Join the 9-month cohort and get access to all lessons and live classes.",
              },
              {
                step: "02",
                title: "Learn Tajweed",
                desc: "Master the rules of recitation with interactive lessons and audio guides.",
              },
              {
                step: "03",
                title: "Recite & Reflect",
                desc: "Progress through the Qur'an with Tafsir insights and guided practice.",
              },
              {
                step: "04",
                title: "Celebrate Khatm",
                desc: "Complete the entire Qur'an and celebrate your achievement.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-lesson-green/20 bg-white p-6 shadow-sm"
              >
                <span className="font-display text-3xl font-bold text-gold">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-teal-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample lesson preview */}
      <section className="bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold text-teal-deep sm:text-4xl">
                Interactive Tajweed Lessons
              </h2>
              <p className="mt-4 leading-relaxed text-foreground/70">
                Our lessons mirror the clarity of traditional Qaida books — with
                clickable letters, color-coded Tajweed rules, and built-in audio
                pronunciation for every example.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-pink-highlight" />
                  Color-highlighted letters for Tajweed rules
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-lesson-green" />
                  Alphabet grids with audio pronunciation
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  Practice word tables with full harakat
                </li>
              </ul>
              <Link
                href="/lessons/alphabet"
                className="mt-8 inline-block rounded-full bg-teal-deep px-6 py-3 text-sm font-medium text-white transition hover:bg-teal-mid"
              >
                Try a Sample Lesson
              </Link>
            </div>

            <div className="lesson-border rounded-xl bg-cream p-6">
              <p className="font-arabic text-center text-sm text-lesson-green">
                البَابُ الأَوَّلُ
              </p>
              <p className="mt-1 text-center text-xs text-foreground/50">
                Chapter 1: The Alphabetical Letters
              </p>
              <div className="mt-4 grid grid-cols-4 gap-1">
                {["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د"].map((l, i) => (
                  <div
                    key={l}
                    className={`rounded py-4 text-center ${
                      i % 2 === 0 ? "bg-lesson-green-light" : "bg-white"
                    }`}
                  >
                    <span className="font-arabic text-3xl">{l}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-foreground/50">
                + 20 more letters in the full lesson
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="stars-bg px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Begin Your Quran Journey
          </h2>
          <p className="mt-4 text-white/70">
            Join students completing the Qur&apos;an in 9 months with guided
            Tajweed, Tafsir, and live recitation classes.
          </p>
          <Link
            href="/enroll"
            className="mt-8 inline-block rounded-full bg-gold px-10 py-4 font-medium text-teal-deep shadow-lg transition hover:bg-gold-light"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </>
  );
}
