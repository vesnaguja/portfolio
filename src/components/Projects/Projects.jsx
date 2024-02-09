import { Container, Row } from "react-bootstrap";
import { projects } from "../../data/projectsData";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.css";

export const Projects = () => {
  return (
    <Container id="projects" className="py-5 my-5">
      <h2 className="projects-title text-center py-5" data-aos="fade-down">
        PROJECTS
      </h2>
      <Container fluid>
        <Row className="justify-content-center g-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Row>
      </Container>
    </Container>
  );
};
