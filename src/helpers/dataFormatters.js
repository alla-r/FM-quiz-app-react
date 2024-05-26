const getIconConfig = (quiz, imgSrc) => {
  const colorBG = {
    HTML: "orange",
    CSS: "green",
    JavaScript: "blue",
    Accessibility: "purple",
  };

  return {
    color: colorBG[quiz] || "orange",
    content: { type: "icon", value: imgSrc },
    altText: `${quiz} image`,
  };
};

const getStartMenuProps = (data) => {
  let result = {
    notFound: true,
  };

  if (data && data.quizzes && data.quizzes.length > 0) {
    const startMenuConfig = data.quizzes.map(({ title, icon }) => {
      return {
        id: title,
        text: title,
        iconConfig: getIconConfig(title, icon),
      };
    });

    result = startMenuConfig;
  }

  return result;
};

export { getStartMenuProps };
