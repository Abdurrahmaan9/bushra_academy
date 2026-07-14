"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/lessons/alphabet", label: "Lessons" },
  { href: "/enroll", label: "Enroll" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-teal-deep/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-teal-mid">
            <span className="font-arabic text-lg text-gold">ب</span>
          </div>
          <div>
            <p className="font-display text-sm leading-none text-gold-light">
              Bushra Academy
            </p>
            <p className="text-xs text-white/60">Quran Journey</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active
                    ? "bg-gold/20 text-gold-light"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/enroll"
          className="hidden rounded-full bg-gold px-5 py-2 text-sm font-medium text-teal-deep transition hover:bg-gold-light md:inline-block"
        >
          Start Your Journey
        </Link>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-white/80 hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/enroll"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-gold px-4 py-3 text-center font-medium text-teal-deep"
          >
            Start Your Journey
          </Link>
        </nav>
      )}
    </header>
  );
}
