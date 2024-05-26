import styles from "./icon.module.css";

function Icon({ color, content, altText, status = "" }) {
  return (
    <div className={`${styles.square} ${color}-bg ${status}`}>
      {content.type === "icon" && <img src={content.value} alt={altText} width={25} height={25} />}

      {content.type === "text" && <div className="heading-S">{content.value}</div>}
    </div>
  );
}

export default Icon;
