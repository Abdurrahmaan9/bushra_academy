import Link from "next/link";
import { modules, features } from "@/data/curriculum";

const colorMap = {
  green: {
    bg: "bg-green-module",
    dark: "bg-green-dark",
    text: "text-green-module",
    border: "border-green-module",
  },
  orange: {
    bg: "bg-orange-module",
    dark: "bg-orange-dark",
    text: "text-orange-module",
    border: "border-orange-module",
  },
  red: {
    bg: "bg-red-module",
    dark: "bg-red-dark",
    text: "text-red-module",
    border: "border-red-module",
  },
};

function Lantern({ className }: { className?: string }) {
  return (
    <svg
      className={`lantern-glow ${className ?? ""}`}
      viewBox="0 0 60 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30 5 L25 15 L35 15 Z" fill="#d4a853" />
      <rect x="22" y="15" width="16" height="4" rx="1" fill="#b8860b" />
      <path
        d="M18 19 Q30 25 42 19 L40 70 Q30 78 20 70 Z"
        fill="#1a5f78"
        stroke="#d4a853"
        strokeWidth="1.5"
      />
      <path
        d="M22 25 L22 65 M30 23 L30 68 M38 25 L38 65"
        stroke="#d4a853"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <ellipse cx="30" cy="72" rx="8" ry="3" fill="#d4a853" opacity="0.8" />
      <path d="M28 75 Q30 90 32 75" stroke="#d4a853" strokeWidth="1" fill="none" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="stars-bg relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      {/* Mosque silhouettes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute bottom-0 left-0 h-48 w-full" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice">
          <path d="M100 200 L100 120 Q110 80 120 120 L120 200" fill="#0a2e3d" />
          <ellipse cx="110" cy="115" rx="25" ry="15" fill="#0a2e3d" />
          <path d="M300 200 L300 100 L310 60 L320 100 L320 200" fill="#0a2e3d" />
          <ellipse cx="310" cy="95" rx="30" ry="18" fill="#0a2e3d" />
          <path d="M500 200 L500 130 Q520 90 540 130 L540 200" fill="#0a2e3d" />
          <ellipse cx="520" cy="125" rx="35" ry="20" fill="#0a2e3d" />
          <path d="M700 200 L700 110 L715 70 L730 110 L730 200" fill="#0a2e3d" />
          <ellipse cx="715" cy="105" rx="40" ry="22" fill="#0a2e3d" />
          <path d="M900 200 L900 125 Q915 85 930 125 L930 200" fill="#0a2e3d" />
          <ellipse cx="915" cy="120" rx="28" ry="16" fill="#0a2e3d" />
          <path d="M1050 200 L1050 115 L1060 75 L1070 115 L1070 200" fill="#0a2e3d" />
          <ellipse cx="1060" cy="110" rx="32" ry="18" fill="#0a2e3d" />
        </svg>
      </div>

      {/* Lanterns */}
      <Lantern className="absolute left-8 top-8 h-16 w-10 opacity-80 sm:left-16 sm:h-20" />
      <Lantern className="absolute right-8 top-12 h-14 w-9 opacity-70 sm:right-20 sm:h-18" />
      <Lantern className="absolute left-1/4 top-4 hidden h-12 w-8 opacity-50 md:block" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-display text-lg text-gold-light sm:text-xl">
          Bushra Academy
        </p>
        <h1 className="font-display mt-2 text-5xl font-semibold leading-tight text-white sm:text-7xl">
          Quran Journey
        </h1>

        <div className="mx-auto mt-6 inline-block rounded-sm bg-teal-deep/80 px-8 py-3 shadow-lg ring-1 ring-gold/30">
          <p className="font-display text-lg text-white sm:text-xl">
            Complete the Qur&apos;an in 9 Months
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          A structured online program combining Tajweed foundations, guided
          recitation, Tafsir insights, and celebration of your Khatm.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/enroll"
            className="rounded-full bg-gold px-8 py-3.5 font-medium text-teal-deep shadow-lg transition hover:bg-gold-light hover:shadow-gold/20"
          >
            Enroll Now
          </Link>
          <Link
            href="/curriculum"
            className="rounded-full border border-white/30 px-8 py-3.5 text-white transition hover:bg-white/10"
          >
            View Curriculum
          </Link>
        </div>
      </div>

      {/* Module cards */}
      <div className="relative mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3">
        {modules.map((mod) => {
          const colors = colorMap[mod.color];
          return (
            <div
              key={mod.id}
              className="module-card group relative bg-cream shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className={`${colors.bg} px-4 py-3 text-center`}>
                <h3 className="font-display text-lg font-semibold text-white">
                  Module {mod.number}: {mod.title}
                </h3>
              </div>
              <div className={`${colors.dark} px-4 py-1.5 text-center`}>
                <span className="text-sm font-medium text-white/90">
                  {mod.weeks}
                </span>
              </div>
              <div className="px-5 py-5">
                <ul className="space-y-2.5 text-sm text-foreground/80">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${colors.bg}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${colors.dark} mx-4 mb-2 rounded px-3 py-2 text-center`}>
                <span className="text-sm font-medium text-white">
                  {mod.action}
                </span>
              </div>
              <p className={`pb-6 text-center text-sm font-medium ${colors.text}`}>
                {mod.outcome}
              </p>
            </div>
          );
        })}
      </div>

      {/* Feature tags */}
      <div className="relative mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
        {features.map((feat) => {
          const colors = colorMap[feat.color];
          return (
            <span
              key={feat.label}
              className={`rounded-full ${colors.bg} px-5 py-2 text-sm font-medium text-white shadow-md`}
            >
              {feat.label}
            </span>
          );
        })}
      </div>
    </section>
  );
}
