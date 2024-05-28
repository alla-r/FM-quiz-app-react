import { createContext, useContext, useState } from "react";

export const QuizContext = createContext({
  title: "",
  setTitle: () => {},
  iconConfig: {},
  setIconConfig: () => {},
  quizInfo: {},
});

export function QuizContextWrapper({ children }) {
  const [iconConfig, setIconConfig] = useState({});
  const [title, setTitle] = useState("");

  return (
    <QuizContext.Provider value={{ iconConfig, setIconConfig, title, setTitle }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuizContext() {
  return useContext(QuizContext);
}
