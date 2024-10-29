import successIcon from "/assets/images/icon-correct.svg";
import errorIcon from "/assets/images/icon-incorrect.svg";

export const ERROR_TEXT = "Please select an answer";
export const OPTION_LETTERS = ["A", "B", "C", "D"];
export const BUTTON_SUBMIT_ANSWER = "Submit Answer";
export const BUTTON_NEXT_QUESTION = "Next Question";
export const BUTTON_SEE_RESULT = "See Result";
export const QUIZ_COMPLETED = "Quiz completed";
export const YOU_SCORED = "You scored...";
export const PLAY_AGAIN = "Play Again";

type StatusType = "success" | "error" | "correctTick" | "selected";
export const ADDITIONAL_ICON_SRC: Record<StatusType, string> = {
  success: successIcon,
  error: errorIcon,
  correctTick: successIcon,
  selected: "",
};

export const STATUS: Record<StatusType, StatusType> = {
  selected: "selected",
  error: "error",
  success: "success",
  correctTick: "correctTick",
};
