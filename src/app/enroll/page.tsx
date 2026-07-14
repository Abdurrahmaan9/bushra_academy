"use client";

import { useState, type FormEvent } from "react";
import { submitEnrollment } from "@/lib/contact";

export default function EnrollPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const result = await submitEnrollment({
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      experience: String(formData.get("experience") ?? "beginner"),
      message: String(formData.get("message") ?? "").trim(),
    });

    setLoading(false);

    if (result.success) {
      setSubmitted(true);
      form.reset();
      return;
    }

    setError(result.message ?? "Unable to submit your enrollment request.");
  }

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
                We&apos;ve received your enrollment request. Our team will
                contact you shortly with next steps.
              </p>
            </div>
          ) : (
            <form
              name="enrollment"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="rounded-xl border border-lesson-green/20 bg-white p-6 shadow-sm sm:p-8"
            >
              <input type="hidden" name="form-name" value="enrollment" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <h2 className="font-display text-xl font-semibold text-teal-deep">
                Enrollment Form
              </h2>
              <p className="mt-2 text-sm text-foreground/60">
                Fill in your details and we&apos;ll get back to you about the
                next cohort.
              </p>

              {error && (
                <p
                  role="alert"
                  className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error}
                </p>
              )}

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
                    disabled={loading}
                    className="mt-1.5 w-full rounded-lg border border-lesson-green/20 bg-cream px-4 py-2.5 text-sm outline-none transition focus:border-lesson-green focus:ring-2 focus:ring-lesson-green/20 disabled:opacity-60"
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
                    disabled={loading}
                    className="mt-1.5 w-full rounded-lg border border-lesson-green/20 bg-cream px-4 py-2.5 text-sm outline-none transition focus:border-lesson-green focus:ring-2 focus:ring-lesson-green/20 disabled:opacity-60"
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
                    disabled={loading}
                    className="mt-1.5 w-full rounded-lg border border-lesson-green/20 bg-cream px-4 py-2.5 text-sm outline-none transition focus:border-lesson-green focus:ring-2 focus:ring-lesson-green/20 disabled:opacity-60"
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
                    disabled={loading}
                    className="mt-1.5 w-full rounded-lg border border-lesson-green/20 bg-cream px-4 py-2.5 text-sm outline-none transition focus:border-lesson-green focus:ring-2 focus:ring-lesson-green/20 disabled:opacity-60"
                  >
                    <option value="beginner">Beginner — New to Tajweed</option>
                    <option value="some">
                      Some experience — Can read with basic Tajweed
                    </option>
                    <option value="intermediate">
                      Intermediate — Comfortable with most rules
                    </option>
                    <option value="advanced">
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
                    disabled={loading}
                    className="mt-1.5 w-full rounded-lg border border-lesson-green/20 bg-cream px-4 py-2.5 text-sm outline-none transition focus:border-lesson-green focus:ring-2 focus:ring-lesson-green/20 disabled:opacity-60"
                    placeholder="Any questions or special requests?"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-8 w-full rounded-full bg-gold py-3 font-medium text-teal-deep transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit Enrollment Request"}
              </button>
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
