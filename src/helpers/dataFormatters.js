const getIconConfig = (quiz, imgSrc) => {
  const colorBG = {
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

const getStartMenuProps = (data) => {
  let result = {
    notFound: true,
  };

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

const getQuestionDetailsProps = (data, quiz, questionNumber) => {
  let result = {
    notFound: true,
  };

  if (data && data.quizzes && data.quizzes.length > 0) {
    const quizBlock = data.quizzes.find((el) => el.title === quiz);
    const questions = quizBlock.questions;
    const questionDetails = questions[questionNumber - 1];

    questionDetails.iconConfig = getIconConfig(quiz, quizBlock.icon);
    questionDetails.quizName = quiz;

    if (questionDetails) {
      questionDetails.currentQuestion = questionNumber;
      questionDetails.amountOfQuestions = questions.length;
    }

    result = questionDetails;
  }

  return result;
};

export { getStartMenuProps, getQuestionDetailsProps };
