import { createContext, useContext, useEffect, useState } from "react";

const INITIAL_STATE = {
  title: "",
  setTitle: () => {},
  iconConfig: {},
  setIconConfig: () => {},
  quizInfo: {
    isSubmitted: false,
    answers: [],
  },
  resetQuizData: () => {},
};

export const QuizContext = createContext(INITIAL_STATE);

function getInitialState() {
  const contextData = localStorage.getItem("contextData");
  return contextData ? JSON.parse(contextData) : INITIAL_STATE;
}

export function QuizContextWrapper({ children }) {
  const initialState = getInitialState();

  const [iconConfig, setIconConfig] = useState(initialState.iconConfig);
  const [title, setTitle] = useState(initialState.title);
  const [quizInfo, setQuizInfo] = useState(initialState.quizInfo);

  useEffect(() => {
    const contextDataToStorage = {
      iconConfig,
      title,
      quizInfo,
    };

    localStorage.setItem("contextData", JSON.stringify(contextDataToStorage));
  }, [title, quizInfo]);

  const resetQuizData = () => {
    setIconConfig(INITIAL_STATE.iconConfig);
    setTitle(INITIAL_STATE.title);
    setQuizInfo(INITIAL_STATE.quizInfo);
  };

  return (
    <QuizContext.Provider
      value={{
        iconConfig,
        setIconConfig,
        title,
        setTitle,
        quizInfo,
        setQuizInfo,
        resetQuizData,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuizContext() {
  return useContext(QuizContext);
}
