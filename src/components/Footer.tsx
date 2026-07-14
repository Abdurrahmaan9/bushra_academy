import Link from "next/link";
import { hadith } from "@/data/curriculum";

export default function Footer() {
  return (
    <footer className="bg-teal-deep text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-teal-mid">
                <span className="font-arabic text-lg text-gold">ب</span>
              </div>
              <div>
                <p className="font-display text-lg text-gold-light">
                  Bushra Academy
                </p>
                <p className="text-sm text-white/60">Quran Journey</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              A guided 9-month journey to complete the Qur&apos;an with Tajweed,
              Tafsir, and reflection.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg text-gold-light">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="/curriculum" className="hover:text-gold-light">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/lessons/alphabet" className="hover:text-gold-light">
                  Sample Lessons
                </Link>
              </li>
              <li>
                <Link href="/enroll" className="hover:text-gold-light">
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg text-gold-light">
              Contact
            </h3>
            <p className="text-sm text-white/60">
              Questions about enrollment or the program?
            </p>
            <a
              href="mailto:info@bushraacademy.com"
              className="mt-2 inline-block text-sm text-gold hover:text-gold-light"
            >
              info@bushraacademy.com
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <blockquote className="font-display text-lg italic text-gold-light/90">
            &ldquo;{hadith}&rdquo;
          </blockquote>
          <p className="mt-2 text-sm text-white/50">
            — Prophet Muhammad ﷺ
          </p>
          <p className="mt-6 text-xs text-white/40">
            © {new Date().getFullYear()} Bushra Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
