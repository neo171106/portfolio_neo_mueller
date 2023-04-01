import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import React_bild from '../../Assets/React.png';
import Nest from '../../Assets/Nest.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={React_bild}
              isBlog={false}
              title="Appsteam Frontend"
              description="In my first project, I had to learn the basics of HTML, CSS and Javascript. Then it was time for the memory app, which I realized with the framework React.js. I was then able to apply what I had learned to a productive project. I was allowed to create and realize various features in the project AOSTA."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nest}
              isBlog={false}
              title="Appsteam Backend"
              description="My first assignment, was to create a CRUD app. Through this I was able to learn the basics of Nest.js and could now apply my learned skills in the project: Technical Assesment and deepen Nest.js."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
