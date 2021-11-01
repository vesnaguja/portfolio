import { createContext, useState } from "react";

export const ThemeContext = createContext();

const theme = {
  light: {
    name: "light",
    textColor: "rgb(36, 41, 47)",
    bgColor: "rgb(240, 240, 240)",
    textSecondaryColor: "rgb(226, 159, 42)",
    introImage: "light-intro-image",
    skillsAndContactImg: "light-skills-and-contact-img",
  },
  dark: {
    name: "dark",
    textColor: "rgb(186, 218, 217)",
    bgColor: "rgb(13, 17, 23)",
    textSecondaryColor: "rgb(96, 186, 184)",
    introImage: "dark-intro-image",
    skillsAndContactImg: "dark-skills-and-contact-img",
  },
  // trecaTema: {
  //   ...
  //   ...
  //   ...
  // }
};

// const themes = ['light', 'dark', 'trecaTema'];

// const themeSelector = (nazivTeme) => {
//   switch (nazivTeme) {
//     case 'light':
//       setThemeStyle(theme.light);
//       break;
//     case 'dark':
//       setThemeStyle(theme.dark);
//     case 'trecaTema':
//       setThemeStyle(theme.trecaTema);
//     default:
//       setThemeStyle(theme.light);
//   }
// }

export const ThemeProvider = (props) => {
  // const [themeStyle, setThemeStyle] = useState("light");
  // const themeStyleToggle = () => setThemeStyle((prevState) => (prevState === "light" ? "dark" : "light"));

  const [themeStyle, setThemeStyle] = useState(theme.light);

  const themeStyleToggle = () => setThemeStyle((prevState) => (prevState.name === theme.light.name ? theme.dark : theme.light));

  return <ThemeContext.Provider value={{ themeStyle, themeStyleToggle }}>{props.children}</ThemeContext.Provider>;
};
