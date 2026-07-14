export type Module = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  weeks: string;
  color: "green" | "orange" | "red";
  items: string[];
  action: string;
  outcome: string;
  lessons: LessonSummary[];
};

export type LessonSummary = {
  slug: string;
  title: string;
  titleAr: string;
  chapter: string;
  chapterAr: string;
};

export const modules: Module[] = [
  {
    id: "foundations",
    number: 1,
    title: "Foundations",
    subtitle: "Tajweed & Basic Intro",
    weeks: "Weeks 1–12",
    color: "green",
    items: [
      "Tajweed Lessons",
      "Juz 30 & Key Surahs (Mulk, Yaesen, Waqiah, Kahf, Sajdah)",
      "Build Recitation Skills",
    ],
    action: "Learn & Practice",
    outcome: "Tajweed & Basic Intro",
    lessons: [
      {
        slug: "alphabet",
        title: "Lesson 1: The Alphabetical Letters",
        titleAr: "الدَّرْسُ الأَوَّلُ: الحُرُوفُ الهِجَائِيَّةُ",
        chapter: "Chapter 1",
        chapterAr: "البَابُ الأَوَّلُ",
      },
      {
        slug: "hamza",
        title: "Lesson 3: Hamza",
        titleAr: "الدَّرْسُ الثَّالِثُ: الهَمْزَةُ",
        chapter: "Chapter 1",
        chapterAr: "البَابُ الأَوَّلُ",
      },
      {
        slug: "hamzat-al-wasl",
        title: "Lesson 2: Hamzat al-Wasl",
        titleAr: "الدَّرْسُ الثَّانِي: هَمْزَةُ الوَصْلِ",
        chapter: "Hamzat al-Qat' & Hamzat al-Wasl",
        chapterAr: "هَمْزَةُ القَطْعِ وَهَمْزَةُ الوَصْلِ",
      },
    ],
  },
  {
    id: "expansion",
    number: 2,
    title: "Expansion",
    subtitle: "Half of the Qur'an",
    weeks: "Weeks 13–24",
    color: "orange",
    items: [
      "Juz 1 Onwards",
      "Tafsir Insights",
      "Connect the Meanings",
    ],
    action: "Recite & Understand",
    outcome: "Half of the Qur'an",
    lessons: [
      {
        slug: "alif-after-waw",
        title: "The Alif after the Waw of Plurality",
        titleAr: "الأَلِفُ بَعْدَ وَاوِ الجَمْعِ",
        chapter: "Chapter 8",
        chapterAr: "البَابُ الثَّامِنُ",
      },
    ],
  },
  {
    id: "completion",
    number: 3,
    title: "Completion",
    subtitle: "Entire Qur'an Complete",
    weeks: "Weeks 25–39",
    color: "red",
    items: [
      "Finish the Qur'an",
      "Thematic Tafsir",
      "Prepare for Khatm",
    ],
    action: "Reflect & Celebrate",
    outcome: "Entire Qur'an Complete",
    lessons: [],
  },
];

export const features = [
  { label: "4 Pages a Class", color: "green" as const },
  { label: "Knowledge & Reflection", color: "orange" as const },
  { label: "Celebrate Your Khatm!", color: "red" as const },
];

export const hadith =
  "The best among you are those who learn the Qur'an and teach it.";
