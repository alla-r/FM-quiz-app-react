import { createContext, useContext, useEffect, useState } from "react";

const INITIAL_STATE = {
  title: "",
  setTitle: () => {},
  iconConfig: {},
  setIconConfig: () => {},
  quizInfo: {
    answers: [],
    questionAmount: 0,
  },
  resetQuizData: () => {},
  theme: "",
  toggleTheme: () => {},
};

export const QuizContext = createContext(INITIAL_STATE);

function getInitialState() {
  const contextData = localStorage.getItem("contextData");
  return contextData ? JSON.parse(contextData) : INITIAL_STATE;
}

function defaultTheme() {
  const themeLocalStorage = localStorage.getItem("theme");
  const themeSystem = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  return themeLocalStorage ?? themeSystem;
}

export function QuizContextWrapper({ children }) {
  const initialState = getInitialState();

  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

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
  }, [iconConfig, title, quizInfo]);

  useEffect(() => {
    if (!theme) return setTheme(defaultTheme());

    document.querySelector(":root").dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

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
        theme,
        toggleTheme,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuizContext() {
  return useContext(QuizContext);
}
