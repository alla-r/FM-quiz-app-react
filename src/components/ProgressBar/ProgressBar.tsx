import styles from "./progress.module.css";

type ProgressBarProps = {
  value: number;
};

function ProgressBar({ value }: ProgressBarProps) {
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
