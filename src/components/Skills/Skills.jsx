import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoSass, IoLogoJavascript } from "react-icons/io";
import { SiBootstrap, SiReact, SiGithub, SiJquery } from "react-icons/si";
import { ThemeContext } from "../../ThemeProvider";
import "./Skills.css";

export const Skills = () => {
  const theme = useContext(ThemeContext);
  const skillsImgClass = theme.themeStyle.skillsAndContactImg;

  return (
    <Container fluid id="skills" className={`py-5 my-5 ${skillsImgClass}`}>
      <Container className="py-5 text-center">
        <h2 className="fw-bold py-5">SKILLS</h2>

        <Row className="justify-content-between py-5 g-2">
          <Col sm={4} md={3} lg={1}>
            <AiFillHtml5 size="100px" className="border p-2"/>
          </Col>
          <Col sm={4} md={3} lg={1}>
            <IoLogoCss3 size="100px" className="border p-2"/>
          </Col>
          <Col sm={4} md={3} lg={1}>
            <SiBootstrap size="100px" className="border p-2"/>
          </Col>
          <Col sm={4} md={3} lg={1}>
            <IoLogoSass size="100px" className="border p-2"/>
          </Col>
          <Col sm={4} md={3} lg={1}>
            <IoLogoJavascript size="100px" className="border p-2"/>
          </Col>
          <Col sm={4} md={3} lg={1}>
            <SiReact size="100px" className="border p-2"/>
          </Col>
          <Col sm={4} md={3} lg={1}>
            <SiJquery size="100px" className="border p-2"/>
          </Col>
          <Col sm={4} md={3} lg={1}>
            <SiGithub size="100px" className="border p-2"/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
