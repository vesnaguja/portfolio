import "./App.css";
import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
// import { Toggle } from "./components/Toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { BackToTopButton } from "./components/BackToTopButton/BackToTopButton";

const App = () => {
  const theme = useContext(ThemeContext);
  const themeStyle = theme.themeStyle.name;

  return (
    <div
      style={{
        backgroundColor: themeStyle === "dark" ? "rgb(13, 17, 23)" : "rgb(240, 240, 240)",
        color: themeStyle === "dark" ? "rgb(191, 209, 217)" : "rgb(36, 41, 47)",
      }}
    >
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <BackToTopButton />
    </div>
  );
};

export default App;
