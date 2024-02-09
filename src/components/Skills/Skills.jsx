import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiBootstrap,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNuxtdotjs,
  SiNextdotjs,
} from "react-icons/si";
import { FaVuejs, FaGitAlt } from "react-icons/fa";
import { IoLogoCss3, IoLogoSass, IoLogoJavascript } from "react-icons/io";
import { ThemeContext } from "../../ThemeProvider";
import "./Skills.css";

export const Skills = () => {
  const theme = useContext(ThemeContext);
  const skillsImgClass = theme.themeStyle.skillsAndContactImg;
  const SKILLS = [
    {
      name: "JavaScript",
      icon: <IoLogoJavascript size="100px" className="border p-2" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size="100px" className="border p-2" />,
    },
    {
      name: "React",
      icon: <SiReact size="100px" className="border p-2" />,
    },
    {
      name: "NEXT.js",
      icon: <SiNextdotjs size="100px" className="border p-2" />,
    },
    {
      name: "Vue.js",
      icon: <FaVuejs size="100px" className="border p-2" />,
    },
    {
      name: "Nuxt",
      icon: <SiNuxtdotjs size="100px" className="border p-2" />,
    },
    {
      name: "HTML5",
      icon: <AiFillHtml5 size="100px" className="border p-2" />,
    },
    {
      name: "CSS3",
      icon: <IoLogoCss3 size="100px" className="border p-2" />,
    },
    {
      name: "SASS",
      icon: <IoLogoSass size="100px" className="border p-2" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size="100px" className="border p-2" />,
    },
    {
      name: "Bootstrap 5",
      icon: <SiBootstrap size="100px" className="border p-2" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt size="100px" className="border p-2" />,
    },
  ];

  return (
    <Container fluid id="skills" className={`py-5 my-5 ${skillsImgClass}`}>
      <Container className="py-5 text-center">
        <h2 className="fw-bold py-5" data-aos="fade-down">
          SKILLS
        </h2>

        <Row className="justify-content-between py-5 g-2">
          {SKILLS.map((skill, i) => (
            <Col
              data-aos="fade-up"
              data-aos-delay={i * 100}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              key={skill.name}
              className="mb-2 md:mb-4"
            >
              {skill.icon}
              <p>{skill.name}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
