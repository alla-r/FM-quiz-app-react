import Icon from "../../../Icon";
import { useQuizContext } from "../../../../context/quiz-context";

import styles from "../../header.module.css";

function IconTitle() {
  const { iconConfig, title } = useQuizContext();

  return (
    <>
      {title && (
        <div className={styles.title}>
          <div>{iconConfig && <Icon {...iconConfig} />}</div>
          <h1 className="heading-S">{title}</h1>
        </div>
      )}
    </>
  );
}

export default IconTitle;
