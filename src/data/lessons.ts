export type AlphabetLetter = {
  letter: string;
  name: string;
  transliteration: string;
};

export type PracticeWord = {
  word: string;
  highlight?: { start: number; end: number };
  transliteration?: string;
};

export type LetterForm = {
  label: string;
  labelAr: string;
  forms: string[];
};

export type Lesson = {
  slug: string;
  type: "alphabet" | "letter-forms" | "practice-words";
  title: string;
  titleAr: string;
  chapter: string;
  chapterAr: string;
  subtitle?: string;
  subtitleAr?: string;
  topicBadge?: string;
  alphabet?: AlphabetLetter[];
  letterForms?: LetterForm[];
  practiceWords?: PracticeWord[];
  instructions?: string;
};

export const lessons: Record<string, Lesson> = {
  alphabet: {
    slug: "alphabet",
    type: "alphabet",
    title: "Lesson 1: The Alphabetical Letters",
    titleAr: "الدَّرْسُ الأَوَّلُ: الحُرُوفُ الهِجَائِيَّةُ",
    chapter: "Chapter 1",
    chapterAr: "البَابُ الأَوَّلُ: الحُرُوفُ الهِجَائِيَّةُ",
    instructions:
      "Click any letter to hear its pronunciation. Practice each letter from right to left.",
    alphabet: [
      { letter: "ا", name: "Alif", transliteration: "a" },
      { letter: "ب", name: "Ba", transliteration: "b" },
      { letter: "ت", name: "Ta", transliteration: "t" },
      { letter: "ث", name: "Tha", transliteration: "th" },
      { letter: "ج", name: "Jim", transliteration: "j" },
      { letter: "ح", name: "Ha", transliteration: "ḥ" },
      { letter: "خ", name: "Kha", transliteration: "kh" },
      { letter: "د", name: "Dal", transliteration: "d" },
      { letter: "ذ", name: "Dhal", transliteration: "dh" },
      { letter: "ر", name: "Ra", transliteration: "r" },
      { letter: "ز", name: "Zay", transliteration: "z" },
      { letter: "س", name: "Sin", transliteration: "s" },
      { letter: "ش", name: "Shin", transliteration: "sh" },
      { letter: "ص", name: "Sad", transliteration: "ṣ" },
      { letter: "ض", name: "Dad", transliteration: "ḍ" },
      { letter: "ط", name: "Ta", transliteration: "ṭ" },
      { letter: "ظ", name: "Za", transliteration: "ẓ" },
      { letter: "ع", name: "Ayn", transliteration: "ʿ" },
      { letter: "غ", name: "Ghayn", transliteration: "gh" },
      { letter: "ف", name: "Fa", transliteration: "f" },
      { letter: "ق", name: "Qaf", transliteration: "q" },
      { letter: "ك", name: "Kaf", transliteration: "k" },
      { letter: "ل", name: "Lam", transliteration: "l" },
      { letter: "م", name: "Mim", transliteration: "m" },
      { letter: "ن", name: "Nun", transliteration: "n" },
      { letter: "هـ", name: "Ha", transliteration: "h" },
      { letter: "و", name: "Waw", transliteration: "w" },
      { letter: "ي", name: "Ya", transliteration: "y" },
    ],
  },
  hamza: {
    slug: "hamza",
    type: "letter-forms",
    title: "Lesson 3: Hamza",
    titleAr: "الدَّرْسُ الثَّالِثُ: الهَمْزَةُ",
    chapter: "Chapter 1",
    chapterAr: "البَابُ الأَوَّلُ",
    subtitle: "Forms of Hamza",
    subtitleAr: "أَشْكَالُ الهَمْزَةِ",
    letterForms: [
      {
        label: "Hamza on Alif",
        labelAr: "هَمْزَةٌ عَلَى الأَلِفِ",
        forms: ["أَ", "أُ", "إِ", "ـأَ", "ـأُ", "ـإِ", "ـأَ", "أَ", "ـأُ", "إِ"],
      },
      {
        label: "Hamza on Waw",
        labelAr: "هَمْزَةٌ عَلَى الوَاوِ",
        forms: ["ؤُ", "ـؤُ", "ؤُ", "ـؤُ", "ؤُ"],
      },
      {
        label: "Hamza on Ya",
        labelAr: "هَمْزَةٌ عَلَى اليَاءِ",
        forms: ["ئِ", "ـئِ", "ئِ", "ـئِ", "ئِ"],
      },
    ],
  },
  "hamzat-al-wasl": {
    slug: "hamzat-al-wasl",
    type: "practice-words",
    title: "Lesson 2: Hamzat al-Wasl",
    titleAr: "الدَّرْسُ الثَّانِي: هَمْزَةُ الوَصْلِ",
    chapter: "Hamzat al-Qat' & Hamzat al-Wasl",
    chapterAr: "هَمْزَةُ القَطْعِ وَهَمْزَةُ الوَصْلِ",
    subtitle: "Examples of Hamzat al-Wasl",
    subtitleAr: "أَمْثِلَةٌ عَلَى هَمْزَةِ الوَصْلِ",
    instructions:
      "The highlighted letter shows Hamzat al-Wasl. Click any word to hear its recitation.",
    practiceWords: [
      { word: "اِسْمُ", highlight: { start: 0, end: 1 } },
      { word: "اِبْنُ", highlight: { start: 0, end: 1 } },
      { word: "اِمْرَأَةٌ", highlight: { start: 0, end: 1 } },
      { word: "اِثْنَانِ", highlight: { start: 0, end: 1 } },
      { word: "اِثْنَتَانِ", highlight: { start: 0, end: 1 } },
      { word: "اِثْنَيْ", highlight: { start: 0, end: 1 } },
      { word: "اِثْنَتَيْ", highlight: { start: 0, end: 1 } },
      { word: "اِثْنَيْنِ", highlight: { start: 0, end: 1 } },
      { word: "اِثْنَتَيْنِ", highlight: { start: 0, end: 1 } },
      { word: "اِثْنَيْنِ", highlight: { start: 0, end: 1 } },
      { word: "اِثْنَتَيْنِ", highlight: { start: 0, end: 1 } },
      { word: "اِثْنَيْنِ", highlight: { start: 0, end: 1 } },
    ],
  },
  "alif-after-waw": {
    slug: "alif-after-waw",
    type: "practice-words",
    title: "The Alif after the Waw of Plurality",
    titleAr: "الأَلِفُ بَعْدَ وَاوِ الجَمْعِ",
    chapter: "Chapter 8",
    chapterAr: "البَابُ الثَّامِنُ",
    topicBadge: "وا",
    instructions:
      "The pink letter shows the silent Alif after the Waw of plurality.",
    practiceWords: [
      { word: "مُسْلِمُو", highlight: { start: 6, end: 7 } },
      { word: "مُؤْمِنُو", highlight: { start: 6, end: 7 } },
      { word: "صَالِحُو", highlight: { start: 6, end: 7 } },
      { word: "عَالِمُو", highlight: { start: 6, end: 7 } },
      { word: "فَاسِقُو", highlight: { start: 6, end: 7 } },
      { word: "ظَالِمُو", highlight: { start: 6, end: 7 } },
      { word: "كَافِرُو", highlight: { start: 6, end: 7 } },
      { word: "مُجْرِمُو", highlight: { start: 7, end: 8 } },
      { word: "مُشْرِكُو", highlight: { start: 7, end: 8 } },
      { word: "مُنَافِقُو", highlight: { start: 8, end: 9 } },
      { word: "مُسْتَضْعَفُو", highlight: { start: 11, end: 12 } },
      { word: "مُسْتَكْبِرُو", highlight: { start: 10, end: 11 } },
    ],
  },
};

export function getLesson(slug: string): Lesson | undefined {
  return lessons[slug];
}

export function getAllLessonSlugs(): string[] {
  return Object.keys(lessons);
}
