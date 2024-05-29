import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/Button";
import { QUIZ_COMPLETED, YOU_SCORED, PLAY_AGAIN } from "../../constants";

import generalStyles from "../../styles/General.module.css";
import styles from "./Result.module.css";
import Icon from "../../components/Icon";
import IconTitle from "../../components/Header/components/IconTitle";
import { useQuizContext } from "../../context/quiz-context";

function Result() {
  const navigate = useNavigate();

  // TODO: add logic
  const questionAmount = 10;
  const score = 8;

  const onPlayAgainHandler = () => {
    navigate("/");
  };

  // TODO add iconConfig

  return (
    <div className={generalStyles.background}>
      <div className={generalStyles.main}>
        <div className={generalStyles["content-wrapper"]}>
          <div className={generalStyles.column}>
            <h1 className={`${styles.header} heading-L`}>{QUIZ_COMPLETED}</h1>
            <p className={`${styles.subheader} heading-L--bold`}>{YOU_SCORED}</p>
          </div>
          <div>
            <div className={styles["result-wrapper"]}>
              <div className={styles.iconTitleWrapper}>
                <IconTitle />
              </div>

              <div className={styles.score}>{score}</div>
              <div className={styles["score-description"]}>out of {questionAmount}</div>
            </div>
            <CustomButton onButtonClick={onPlayAgainHandler} text={PLAY_AGAIN} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;