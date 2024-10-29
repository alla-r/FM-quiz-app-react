import { STATUS } from "../constants";
import { IconConfig, Data, FormattedQuestion, StartMenuItem, Answer } from "../types";

const getIconConfig = (quiz: string, imgSrc: string): IconConfig => {
  const colorBG: Record<string, string> = {
    HTML: "orange",
    CSS: "green",
    JavaScript: "blue",
    Accessibility: "purple",
  };

  return {
    color: colorBG[quiz] || "orange",
    content: { type: "icon", value: imgSrc },
    altText: `${quiz} image`,
  };
};

const getStartMenuProps = (data: Data): StartMenuItem[] | null => {
  let result = null;

  if (data && data.quizzes && data.quizzes.length > 0) {
    const startMenuConfig = data.quizzes.map(({ title, icon }) => {
      return {
        id: title,
        text: title,
        iconConfig: getIconConfig(title, icon),
      };
    });

    result = startMenuConfig;
  }

  return result;
};

const getQuestionDetailsProps = (
  data: Data,
  quiz: string,
  questionNumber: number,
): FormattedQuestion => {
  let result;

  if (data && data.quizzes && data.quizzes.length > 0) {
    const quizBlock = data.quizzes.find((el) => el.title === quiz);

    if (quizBlock) {
      const questions = quizBlock.questions;
      const questionDetails: FormattedQuestion = {
        ...questions[questionNumber - 1],
        iconConfig: getIconConfig(quiz, quizBlock.icon),
        quizName: quiz,
        currentQuestion: questionNumber,
        amountOfQuestions: questions.length,
      };

      result = questionDetails;
    }
  }

  return result!;
};

const getStatus = (contextInfo: Answer, option: string, currentSelectedOption: string) => {
  if (!contextInfo && currentSelectedOption === option) {
    return currentSelectedOption ? STATUS.selected : "";
  }

  if (contextInfo && contextInfo.isCorrect && contextInfo.userAnswer === option) {
    return STATUS.success;
  }

  if (contextInfo && contextInfo.isCorrect === false && contextInfo.userAnswer === option) {
    return STATUS.error;
  }

  if (contextInfo && contextInfo.isCorrect === false && contextInfo.correctAnswer === option) {
    return STATUS.correctTick;
  }
};

export { getStartMenuProps, getQuestionDetailsProps, getStatus };
