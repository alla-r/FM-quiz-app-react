import { useParams } from "react-router-dom";
import * as constants from "../../constants";

import styles from "./Question.module.css";

function Question() {
  const params = useParams();
  console.log(params);

  return <>Question</>;
}

export default Question;
