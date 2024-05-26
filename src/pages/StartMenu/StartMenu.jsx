import React from "react";
// import { useRouter } from "next/router";
import Header from "../../components/Header";
import ItemRow from "../../components/ItemRow";

import data from "../../../data/data.json";
import { getStartMenuProps } from "../../helpers/dataFormatters";
// TODO rename or move style file
import styles from "./General.module.css";

function StartMenu() {
  // TODO navigation
  // const router = useRouter();
  const startMenuConfig = getStartMenuProps(data);

  const items = startMenuConfig.map(({ id, text, imgSrc, iconBG, iconConfig }) => {
    const onQuizSelected = (id) => {
      // router.push({
      //   pathname: "questions/[quiz]/[id]",
      //   query: { id: 1, quiz: id },
      // });
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
    <div className={styles.background}>
      <Header />
      <main className={styles.main}>
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
      </main>
    </div>
  );
}

export default StartMenu;
