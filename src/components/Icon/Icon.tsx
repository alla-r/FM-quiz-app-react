import { IconConfig } from "../../types";
import styles from "./icon.module.css";

interface IconProps extends IconConfig {
  status?: string;
}

function Icon({ color, content, altText, status = "" }: IconProps) {
  return (
    <div className={`${styles.square} ${color}-bg ${status}`}>
      {content.type === "icon" && (
        <img src={content.value} alt={altText} width={25} height={25} />
      )}

      {content.type === "text" && (
        <div className="heading-S">{content.value}</div>
      )}
    </div>
  );
}

export default Icon;
