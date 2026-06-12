export interface Student {
  id: string;
  name: string;
  avatar: string;
  photoUrl?: string;
}

export type SubjectId = "francais" | "mathematiques" | "eveil" | "jeux";

export interface Subject {
  id: SubjectId;
  title: string;
  caption: string;
  color: string; // Tailwind class base like "purple", "blue", "emerald", "amber"
  accentColor: string; // e.g., "#8B5CF6"
  dotColor: string; // Tailwind class like "bg-indigo-500" or color
  description: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}
