export interface Data {
  quizzes: {
    title: string;
    icon: string;
    questions: Question[];
  }[];
}

export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface FormattedQuestion extends Question {
  quizName: string;
  iconConfig: IconConfig;
  currentQuestion: number;
  amountOfQuestions: number;
}

export type StartMenuItem = {
  id: string;
  text: string;
  iconConfig: IconConfig;
};

export type IconConfig = {
  altText: string;
  color?: string;
  content: {
    type: string;
    value: string;
  };
};

export type QuizInfo = {
  answers: Answer[];
  questionAmount: number;
};

export type Answer = {
  correctAnswer: string;
  userAnswer: string;
  isCorrect: boolean;
};
