import Link from "next/link";
import { hadith } from "@/data/curriculum";
import WhatsAppLink from "./WhatsAppLink";

const WHATSAPP_NUMBER = "27681240015";
const WHATSAPP_MESSAGE =
  "Hi there! I'm looking to enroll in the Quran Journey program. Could you send over details on pricing and how I can get started? Thanks!";

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
              href="mailto:Bushraa786academy@gmail.com"
              className="mt-2 inline-block text-sm text-gold hover:text-gold-light"
            >
              Bushraa786academy@gmail.com
            </a>
            <br />
            <WhatsAppLink
              phone={WHATSAPP_NUMBER}
              message={WHATSAPP_MESSAGE}
              className="mt-2 inline-block text-sm text-gold hover:text-gold-light"
            >
              +27 68 124 0015
            </WhatsAppLink>
            <br />
            <WhatsAppLink
              phone={WHATSAPP_NUMBER}
              message={WHATSAPP_MESSAGE}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </WhatsAppLink>
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
