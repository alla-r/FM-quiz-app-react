import { ERROR_TEXT, ADDITIONAL_ICON_SRC } from "../../constants";
import Icon from "../Icon";

import styles from "./errorMessage.module.css";

function ErrorMessage() {
  const iconConfig = {
    content: {
      type: "icon",
      value: ADDITIONAL_ICON_SRC.error,
    },
    altText: `Error icon`,
  };

  return (
    <div className={styles.error}>
      <Icon {...iconConfig} />
      {ERROR_TEXT}
    </div>
  );
}

export default ErrorMessage;
