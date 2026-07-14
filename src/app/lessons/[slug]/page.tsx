import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LessonViewer from "@/components/LessonViewer";
import { getLesson, getAllLessonSlugs } from "@/data/lessons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllLessonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return { title: "Lesson Not Found" };
  return {
    title: `${lesson.title} | Bushra Academy`,
    description: lesson.instructions ?? lesson.title,
  };
}

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  return (
    <div className="min-h-screen bg-cream">
      <LessonViewer lesson={lesson} />
    </div>
  );
}
