import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-cream px-4 text-center">
      <p className="font-arabic text-6xl text-lesson-green/30">٤٠٤</p>
      <h1 className="font-display mt-4 text-3xl font-semibold text-teal-deep">
        Page Not Found
      </h1>
      <p className="mt-2 text-foreground/60">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-teal-deep px-6 py-3 text-sm font-medium text-white transition hover:bg-teal-mid"
      >
        Return Home
      </Link>
    </div>
  );
}
