import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemRow from "../../components/ItemRow";
import data from "../../../data/data.json";
import { getStartMenuProps } from "../../helpers/dataFormatters";
import { useQuizContext } from "../../context/quiz-context";

import styles from "../../styles/General.module.css";

function StartMenu() {
  const { setIconConfig, setTitle, resetQuizData } = useQuizContext();
  const navigate = useNavigate();
  const startMenuConfig = getStartMenuProps(data);

  useEffect(() => {
    resetQuizData();
  }, []);

  const items = startMenuConfig.map(({ id, text, imgSrc, iconBG, iconConfig }) => {
    const onQuizSelected = (id) => {
      setIconConfig(iconConfig);
      setTitle(text);
      navigate(`question/${id}/1`);
    };

    return (
      <ItemRow
        key={id}
        id={id}
        content={text}
        onRowClick={() => onQuizSelected(id)}
        iconConfig={iconConfig}
      />
    );
  });

  return (
    <>
      <section className={styles.main}>
        <div className={styles["content-wrapper"]}>
          <div className={styles.column}>
            <h1 className="heading-L">
              Welcome to the <br />
              <span className="heading-L--bold">Frontend Quiz!</span>
            </h1>
            <p className={`${styles.description} body-S`}>Pick a subject to get started.</p>
          </div>

          <ul>{items}</ul>
        </div>
      </section>
    </>
  );
}

export default StartMenu;
