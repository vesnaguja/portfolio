import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiCertification } from "react-icons/bi";
import { GoBook } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { ThemeContext } from "../../ThemeProvider";
import "./About.css";

export const About = () => {
  const theme = useContext(ThemeContext);
  const iconColor = theme.themeStyle.textSecondaryColor;

  return (
    <Container fluid id="about-me" className="py-5 my-5">
      <Container>
        <h2 className="text-center fw-bold pt-5">ABOUT ME</h2>

        <Row className="py-5">
          <Col sm={12}>
            <p className="fs-4 fw-normal text-center">
              Hello, I'm Vesna, JavaScript and React developer highly motivated to upgrade knowledge and to obtain a full-time job in IT
              industry.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col sm={12} md={6} lg={4} className="text-center">
            <GoBook style={{ color: iconColor }} size="30px" />
            <h4>EDUCATION</h4>
            <p className="fw-bold">Master of Pharmacy</p>
            <p>Faculty of Pharmacy, Univerity of Belgrade</p>
          </Col>

          <Col sm={12} md={6} lg={4} className="text-center">
            <BiCertification style={{ color: iconColor }} size="30px" />
            <h4>CERTIFICATES</h4>
            <p className="fw-bold">Front End Bootcamp</p>
            <p>Belgrade Institute of Technology – BIT</p>
            <p className="fw-bold pt-3"> Quality Assurance Manual Software Testing Course</p>
            <p>TNation Academy, Belgrade</p>
          </Col>

          <Col sm={12} md={6} lg={4} className="text-center">
            <MdOutlineWorkOutline style={{ color: iconColor }} size="30px" />
            <h4>WORK</h4>
            <p>5 years in pharmacy</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
