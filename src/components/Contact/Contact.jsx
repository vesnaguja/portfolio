import { Container } from "react-bootstrap";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { Footer } from "../Footer/Footer";

import "./Contact.css";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";

export const Contact = () => {
  const theme = useContext(ThemeContext);
  const contactImgClass = theme.themeStyle.skillsAndContactImg;
  const textColor = theme.themeStyle.textColor;

  return (
    <Container
      fluid
      id="contact"
      className={`light-skills-and-contact-img ${contactImgClass} pt-5 mt-5`}
    >
      <Container className="py-5 my-5 text-center">
        <h2 className="fw-bold py-5" data-aos="fade-down">
          CONTACT
        </h2>
        <a
          href="mailto:vesna.grujanic@gmail.com"
          className="text-decoration-none fs-4 contact-email"
          style={{ color: textColor }}
        >
          vesna.grujanic@gmail.com
        </a>

        <section className="sotial-media pt-3">
          <a
            className="btn btn-link btn-floating btn-lg m-1"
            href="https://github.com/vesnaguja"
            target="_blank"
            rel="noreferrer"
            role="button"
            style={{ color: textColor }}
          >
            <VscGithub className="contact-icon" size="50px" />
          </a>
          <a
            className="btn btn-link btn-floating btn-lg m-1"
            href="https://www.linkedin.com/in/vesna-grujani%C4%87-3504b21ab/"
            target="_blank"
            rel="noreferrer"
            role="button"
            style={{ color: textColor }}
          >
            <BsLinkedin className="contact-icon" size="50px" />
          </a>
        </section>
      </Container>
      <Footer />
    </Container>
  );
};
