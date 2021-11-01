import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Toggle } from "../Toggle/Toggle";
import "./Header.css";
import { ThemeContext } from "../../ThemeProvider";
import { useContext } from "react";

export const Header = () => {
  const [checked, setChecked] = useState(false);
  const theme = useContext(ThemeContext);
  const textColor = theme.themeStyle.textColor;
  const headerImgClass = theme.themeStyle.skillsAndContactImg;

  const switchHandler = () => {
    setChecked(!checked);
    theme.themeStyleToggle();
  };

  return (
    <Navbar expand="lg" variant="dark" bg='dark' className={`container-fluid ${headerImgClass}`}>
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" style={{ color: textColor }}>
          <Nav className="fs-5 ms-auto">
            <Nav.Link href="#about-me" style={{ color: textColor }}>
              about
            </Nav.Link>
            <Nav.Link href="#skills" style={{ color: textColor }}>
              skills
            </Nav.Link>
            <Nav.Link href="#projects" style={{ color: textColor }}>
              projects
            </Nav.Link>
            <Nav.Link href="#contact" style={{ color: textColor }}>
              contact
            </Nav.Link>
            <Nav.Link>
              <Toggle switchHandler={switchHandler} checked={checked} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
