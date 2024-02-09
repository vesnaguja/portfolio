import { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { BackToTopButton } from "./components/BackToTopButton/BackToTopButton";
import AOS from "aos";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

const App = () => {
  const theme = useContext(ThemeContext);
  const themeStyle = theme.themeStyle.name;

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 100, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor:
          themeStyle === "dark" ? "rgb(13, 17, 23)" : "rgb(240, 240, 240)",
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
