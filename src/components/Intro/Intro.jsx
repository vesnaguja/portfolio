import { Container } from "react-bootstrap";
import { ThemeContext } from "../../ThemeProvider";
import { useContext } from "react";

import "./Intro.css";

export const Intro = () => {
  const theme = useContext(ThemeContext);
  const introImageClass = theme.themeStyle.introImage;
  const textSecondaryColor = theme.themeStyle.textSecondaryColor;

  return (
    <Container fluid className={`intro-wrapper ${introImageClass}`}>
      <Container className="my-name">
        <div className="first-and-last-name mb-5 pt-5">
          <a href="#about-me" className="text-decoration-none">
            <span
              className="logo"
              style={{ color: textSecondaryColor }}
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Vesna
            </span>
          </a>
          <h1 className="last-name" data-aos="fade-down" data-aos-delay="100">
            GRUJANIĆ
          </h1>
          <div className="intro-subtitle my-5">
            <div className="intro-subtitle-wrapper tracking-in-expand pt-5">
              <p className="fs-4 intro-subtitle-content">
                Frontend web developer based in Belgrade.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};
