import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemRow from "../../components/ItemRow";
import CustomButton from "../../components/Button";
import ErrorMessage from "../../components/ErrorMessage";
import ProgressBar from "../../components/ProgressBar";
import {
  OPTION_LETTERS,
  ADDITIONAL_ICON_SRC,
  BUTTON_SUBMIT_ANSWER,
  BUTTON_NEXT_QUESTION,
  BUTTON_SEE_RESULT,
  STATUS,
} from "../../constants";
import data from "../../../data/data.json";
import { getQuestionDetailsProps, getStatus } from "../../helpers/dataFormatters";
import { useQuizContext } from "../../context/quiz-context";

import generalStyles from "../../styles/General.module.css";
import { QuizInfo } from "../../types";

function Question() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const { quizInfo, setQuizInfo } = useQuizContext();
  const { answers } = quizInfo;

  const params = useParams();
  const navigate = useNavigate();

  const questionDetails = getQuestionDetailsProps(data, params.quiz!, Number(params.id));

  const { options, currentQuestion, question, answer, amountOfQuestions } = questionDetails;
  const questionNumber = Number(params.id)!;
  const index = questionNumber - 1;

  let isSubmitted = !!(answers[index] && answers[index].userAnswer);

  const items = options.map((option: string, i: number) => {
    const optionCharacter = OPTION_LETTERS[i];
    const status = getStatus(answers[index], option, selectedOption);

    const iconConfig = {
      color: "grey",
      content: { type: "text", value: optionCharacter },
      altText: `${optionCharacter} icon`,
      status: status,
    };

    let additionalIconConfig;

    if (status === STATUS.error || status === STATUS.success || status === STATUS.correctTick) {
      additionalIconConfig = {
        content: {
          type: "icon",
          value: ADDITIONAL_ICON_SRC[status],
        },
        altText: `${status} icon`,
      };
    }

    const onOptionSelected = (option: string) => {
      setIsErrorVisible(false);
      setSelectedOption(option);
    };

    return (
      <ItemRow
        key={option}
        content={option}
        onRowClick={!isSubmitted ? () => onOptionSelected(option) : () => {}}
        additionalIconConfig={additionalIconConfig}
        iconConfig={iconConfig}
        status={status}
      />
    );
  });

  const onSubmitAnswer = () => {
    if (!selectedOption) {
      setIsErrorVisible(true);
      return;
    }

    isSubmitted = !isSubmitted;
    if (isSubmitted) {
      setQuizInfo((currentQuizInfo: QuizInfo) => {
        let newAnswers = [];
        const answerConfig = {
          isCorrect: selectedOption === answer,
          userAnswer: selectedOption,
          correctAnswer: answer,
        };

        if (!currentQuizInfo.answers[index]) {
          newAnswers = [...currentQuizInfo.answers.slice(0, index), answerConfig];
        } else {
          newAnswers = currentQuizInfo.answers.map((el, i) => (i === index ? answerConfig : el));
        }

        return {
          ...currentQuizInfo,
          questionAmount: amountOfQuestions,
          answers: newAnswers,
        };
      });
    }
  };

  const getNextQuestion = () => {
    if (questionNumber === amountOfQuestions && isSubmitted) {
      navigate(`/question/${params.quiz}/result`);
    }

    if (questionNumber !== amountOfQuestions && isSubmitted) {
      setSelectedOption("");
      navigate(`/question/${params.quiz}/${questionNumber + 1}`);
    }
  };

  const percentValue = (Number(currentQuestion) * 100) / Number(amountOfQuestions);

  return (
    <>
      <div className={generalStyles.background}>
        <main className={generalStyles.main}>
          <div className={generalStyles["content-wrapper"]}>
            <div className={generalStyles.column}>
              <p className="body-S">{`Question ${currentQuestion} of ${amountOfQuestions}`}</p>
              <h1 className="heading-M">{question}</h1>
              <ProgressBar value={percentValue} />
            </div>
            <div>
              <ul>{items}</ul>
              <CustomButton
                onButtonClick={isSubmitted ? getNextQuestion : onSubmitAnswer}
                text={
                  !isSubmitted
                    ? BUTTON_SUBMIT_ANSWER
                    : questionNumber !== amountOfQuestions
                      ? BUTTON_NEXT_QUESTION
                      : BUTTON_SEE_RESULT
                }
              />
              {isErrorVisible && <ErrorMessage />}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Question;
