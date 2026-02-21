
export interface Choice {
  id: number;
  text: string;
}

export interface Question {
  id: number;
  type: 'multiple-choice' | 'short-answer';
  category: string;
  question: string;
  subText?: string;
  choices?: Choice[];
  correctAnswer: string | number;
  explanation: string;
  image?: string;
}

export interface TestResult {
  score: number;
  userAnswers: Record<number, string>;
  isSubmitted: boolean;
}
