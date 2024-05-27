import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ItemRow from "../../components/ItemRow";

import data from "../../../data/data.json";
import { getStartMenuProps } from "../../helpers/dataFormatters";
// TODO rename or move style file
import styles from "./General.module.css";

function StartMenu() {
  const navigate = useNavigate();
  const startMenuConfig = getStartMenuProps(data);

  const items = startMenuConfig.map(({ id, text, imgSrc, iconBG, iconConfig }) => {
    const onQuizSelected = (id) => {
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
