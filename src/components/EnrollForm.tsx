"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ORG_EMAIL } from "@/lib/contact";

function ThankYou() {
  return (
    <div className="rounded-xl border border-lesson-green/30 bg-white p-8 text-center shadow-sm">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lesson-green-light">
        <svg
          className="h-8 w-8 text-lesson-green"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="font-display text-2xl font-semibold text-teal-deep">
        Thank You!
      </h2>
      <p className="mt-3 text-foreground/70">
        We&apos;ve received your enrollment request. Our team will contact you
        shortly with next steps.
      </p>
    </div>
  );
}

function EnrollFormContent() {
  const searchParams = useSearchParams();
  const submitted = searchParams.get("success") === "true";

  return (
    <div className="bg-cream">
      <section className="stars-bg px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            Enroll in Quran Journey
          </h1>
          <p className="mt-4 text-white/70">
            Complete the Qur&apos;an in 9 months with guided Tajweed, Tafsir,
            and live recitation classes.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-lg">
          {submitted ? (
            <ThankYou />
          ) : (
            <form
              name="enrollment"
              method="POST"
              action="/enroll/?success=true"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="rounded-xl border border-lesson-green/20 bg-white p-6 shadow-sm sm:p-8"
            >
              <input type="hidden" name="form-name" value="enrollment" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <h2 className="font-display text-xl font-semibold text-teal-deep">
                Enrollment Form
              </h2>
              <p className="mt-2 text-sm text-foreground/60">
                Fill in your details and we&apos;ll get back to you about the
                next cohort.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground/80"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1.5 w-full rounded-lg border border-lesson-green/20 bg-cream px-4 py-2.5 text-sm outline-none transition focus:border-lesson-green focus:ring-2 focus:ring-lesson-green/20"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground/80"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1.5 w-full rounded-lg border border-lesson-green/20 bg-cream px-4 py-2.5 text-sm outline-none transition focus:border-lesson-green focus:ring-2 focus:ring-lesson-green/20"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground/80"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-1.5 w-full rounded-lg border border-lesson-green/20 bg-cream px-4 py-2.5 text-sm outline-none transition focus:border-lesson-green focus:ring-2 focus:ring-lesson-green/20"
                    placeholder="+27 68 124 0015"
                  />
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-foreground/80"
                  >
                    Recitation Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    className="mt-1.5 w-full rounded-lg border border-lesson-green/20 bg-cream px-4 py-2.5 text-sm outline-none transition focus:border-lesson-green focus:ring-2 focus:ring-lesson-green/20"
                  >
                    <option value="Beginner — New to Tajweed">
                      Beginner — New to Tajweed
                    </option>
                    <option value="Some experience — Can read with basic Tajweed">
                      Some experience — Can read with basic Tajweed
                    </option>
                    <option value="Intermediate — Comfortable with most rules">
                      Intermediate — Comfortable with most rules
                    </option>
                    <option value="Advanced — Looking to complete Khatm">
                      Advanced — Looking to complete Khatm
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground/80"
                  >
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="mt-1.5 w-full rounded-lg border border-lesson-green/20 bg-cream px-4 py-2.5 text-sm outline-none transition focus:border-lesson-green focus:ring-2 focus:ring-lesson-green/20"
                    placeholder="Any questions or special requests?"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-gold py-3 font-medium text-teal-deep transition hover:bg-gold-light"
              >
                Submit Enrollment Request
              </button>

              <p className="mt-4 text-center text-xs text-foreground/50">
                Having trouble? Email us at{" "}
                <a
                  href={`mailto:${ORG_EMAIL}`}
                  className="text-lesson-green hover:underline"
                >
                  {ORG_EMAIL}
                </a>
              </p>
            </form>
          )}

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Duration", value: "9 Months" },
              { label: "Pace", value: "4 Pages/Class" },
              { label: "Format", value: "Live Online" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-lesson-green/10 bg-white p-4 text-center"
              >
                <p className="text-xs text-foreground/50">{item.label}</p>
                <p className="mt-1 font-display text-lg font-semibold text-teal-deep">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function EnrollForm() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center bg-cream text-foreground/60">
          Loading...
        </div>
      }
    >
      <EnrollFormContent />
    </Suspense>
  );
}
