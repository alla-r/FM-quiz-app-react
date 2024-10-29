import styles from "./button.module.css";

type ButtonProps = {
  text: string;
  onButtonClick: () => void;
};

function CustomButton({ onButtonClick, text }: ButtonProps) {
  return (
    <button className={`${styles.button} heading-S`} onClick={onButtonClick}>
      {text}
    </button>
  );
}

export default CustomButton;
