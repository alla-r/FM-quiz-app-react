// import PropTypes from 'prop-types';

import React, { useState, useEffect } from "react";
import LightSunIcon from "/assets/images/icon-sun-light.svg";
import DarkSunIcon from "/assets/images/icon-sun-dark.svg";
import LightMoonIcon from "/assets/images/icon-moon-light.svg";
import DarkMoonIcon from "/assets/images/icon-moon-dark.svg";
import Icon from "../Icon";
import ThemeSwitch from "../ThemeSwitch";
import { useQuizContext } from "../../context/quiz-context";

import styles from "./header.module.css";

function Header() {
  const [theme, setTheme] = useState("");
  const { iconConfig, title } = useQuizContext();

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const defaultTheme = () => {
    const themeLocalStorage = localStorage.getItem("theme");
    const themeSystem = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    return themeLocalStorage ?? themeSystem;
  };

  useEffect(() => {
    if (!theme) return setTheme(defaultTheme());

    document.querySelector(":root").dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <header className={styles.header}>
        {title && (
          <div className={styles.title}>
            {iconConfig && <Icon {...iconConfig} />}
            <h1 className="heading-S">{title}</h1>
          </div>
        )}

        <div className={styles.toggle}>
          <img
            src={theme === "light" ? DarkSunIcon : LightSunIcon}
            alt="Light theme icon"
            width={16}
            height={16}
          />

          <ThemeSwitch theme={theme} toggleThemeHandler={toggleTheme} />

          <img
            src={theme === "light" ? DarkMoonIcon : LightMoonIcon}
            alt="Light theme icon"
            width={16}
            height={16}
          />
        </div>
      </header>
    </>
  );
}

// TODO add prop types
// Header.defaultProps = { };

// Header.propTypes = {
// };

export default Header;
