import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartMenu from "../StartMenu";
import Question from "../Question";
import Result from "../Result";
import Layout from "../Layout";

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
  return <RouterProvider router={router} />;
}

export default InitComponent;
