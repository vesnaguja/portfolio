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
        <h2 className="text-center fw-bold pt-5" data-aos="fade-down">
          ABOUT ME
        </h2>

        <Row className="py-5 mb-5">
          <Col sm={12} data-aos="fade-up">
            <p className="fs-4 fw-normal text-center m-auto col-md-8">
              Hello, I'm Vesna, a frontend web developer highly motivated to
              continuously enhance my skills and deliver functional, visually
              appealing web applications.
            </p>
          </Col>
        </Row>
        <Row className="g-4 md:g-0">
          <Col
            sm={12}
            md={6}
            lg={4}
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <MdOutlineWorkOutline style={{ color: iconColor }} size="30px" />
            <h4>WORK</h4>
            <p>Vast/Vroom - 6 months</p>
            <p>Helbiz DOO, Serbia - 18 months</p>
          </Col>

          <Col
            sm={12}
            md={6}
            lg={4}
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <BiCertification style={{ color: iconColor }} size="30px" />
            <h4>CERTIFICATES</h4>
            <p className="fw-bold">Front End Bootcamp</p>
            <p>Belgrade Institute of Technology – BIT</p>
            <p className="fw-bold pt-3">
              Quality Assurance Manual Software Testing Course
            </p>
            <p>TNation Academy, Belgrade</p>
          </Col>

          <Col
            sm={12}
            md={6}
            lg={4}
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <GoBook style={{ color: iconColor }} size="30px" />
            <h4>EDUCATION</h4>
            <p className="fw-bold">Master of Pharmacy</p>
            <p>Faculty of Pharmacy, Univerity of Belgrade</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
