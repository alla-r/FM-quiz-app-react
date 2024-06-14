import styles from "./progress.module.css";

function ProgressBar({ value }) {
  const inlineStyle = {
    width: `${value}%`,
  };

  return (
    <div className={styles.progress}>
      <div className={styles.line} style={inlineStyle}></div>
    </div>
  );
}

export default ProgressBar;
