import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemRow from "../../components/ItemRow";
import CustomButton from "../../components/Button";
import ErrorMessage from "../../components/ErrorMessage";
import {
  OPTION_LETTERS,
  ADDITIONAL_ICON_SRC,
  BUTTON_SUBMIT_ANSWER,
  BUTTON_NEXT_QUESTION,
} from "../../constants";
import data from "../../../data/data.json";
import { getQuestionDetailsProps } from "../../helpers/dataFormatters";

import generalStyles from "../../styles/General.module.css";

function Question() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isErrorVisible, setIsErrorVisible] = useState(null);

  const params = useParams();
  const questionDetails = getQuestionDetailsProps(data, params.quiz, questionNumber);

  console.log(params);
  console.log(data);
  console.log(questionDetails);

  const { options, currentQuestion, question, answer, amountOfQuestions, iconConfig } =
    questionDetails;

  // TODO: replace hard code with state handling logic
  // Status: selected, error, success
  const status = "error";
  const isSubmitted = true;

  const items = options.map((option, i) => {
    const optionCharacter = OPTION_LETTERS[i];
    const iconConfig = {
      color: "grey",
      content: { type: "text", value: optionCharacter },
      altText: `${optionCharacter} icon`,
      status: status,
    };

    const additionalIconConfig = {
      content: {
        type: "icon",
        value: ADDITIONAL_ICON_SRC[status],
      },
      altText: `${status} icon`,
    };

    const onOptionSelected = (selectedOption) => {
      console.log(selectedOption);
    };

    return (
      <ItemRow
        key={option}
        content={option}
        onRowClick={() => onOptionSelected(option)}
        additionalIconConfig={isSubmitted && additionalIconConfig}
        iconConfig={iconConfig}
        status={status}
      />
    );
  });

  const onSubmitAnswer = () => {
    setIsErrorVisible(true);
  };

  return (
    <>
      <div className={generalStyles.background}>
        {/* <Header title={questionDetails.quizName} iconConfig={iconConfig} /> */}
        <main className={generalStyles.main}>
          <div className={generalStyles["content-wrapper"]}>
            <div className={generalStyles.column}>
              <p className="body-S">{`Question ${currentQuestion} of ${amountOfQuestions}`}</p>
              <h1 className="heading-M">{question}</h1>
            </div>
            <div>
              <ul>{items}</ul>
              <CustomButton onButtonClick={onSubmitAnswer} text={BUTTON_SUBMIT_ANSWER} />
              {isErrorVisible && <ErrorMessage />}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Question;
