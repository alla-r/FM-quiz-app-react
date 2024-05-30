import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartMenu from "../StartMenu";
import Question from "../Question";
import Result from "../Result";
import Layout from "../Layout";
import { QuizContextWrapper } from "../../context/quiz-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <StartMenu /> },
      { path: "question/:quiz/:id", element: <Question /> },
      { path: "question/:quiz/result", element: <Result /> },
    ],
  },
]);

function InitComponent() {
  return (
    <QuizContextWrapper>
      <RouterProvider router={router} />
    </QuizContextWrapper>
  );
}

export default InitComponent;
