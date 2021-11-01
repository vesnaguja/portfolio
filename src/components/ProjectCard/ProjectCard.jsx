import { useContext } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { ThemeContext } from "../../ThemeProvider";

import "./ProjectCard.css";

export const ProjectCard = ({ project }) => {
  const theme = useContext(ThemeContext);
  const buttonTextColor = theme.themeStyle.textSecondaryColor;
  const buttonLiveTextColor = theme.themeStyle.bgColor;

  return (
    <Col sm={12} md={6} lg={4} xl={2} className="d-flex">
      <Card className="project-card flex-fill">
        <div className="project-img-wrapper">
          <Card.Img variant="top" src={project.img} className="project-img" alt="project image" />
        </div>

        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="fw-bold">{project.name}</Card.Title>
          <Card.Text className="fw-normal">{project.text}</Card.Text>
          <div className="d-flex justify-content-between buttons-wrapper">
            <a href={project.code} target="_blank" rel="noreferrer">
              <Button className="code-button fw-bold mt-auto" variant="outline" style={{ color: buttonTextColor, border: buttonTextColor }}>
                Code
              </Button>
            </a>
            <a href={project.live} target="_blank" rel="noreferrer">
              {project.live === undefined ? (
                ""
              ) : (
                <Button
                  className="live-button fw-bold mt-auto"
                  style={{ backgroundColor: buttonTextColor, border: buttonTextColor, color: buttonLiveTextColor }}
                >
                  Live
                </Button>
              )}
            </a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
