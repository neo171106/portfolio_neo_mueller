import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SiKubernetes } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { SiMariadb } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { FaJava } from 'react-icons/fa';
import { SiMicrosoftazure } from 'react-icons/si';
import { SiSpringboot } from 'react-icons/si';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiDocker,
  DiMysql,
  DiHtml5,
  DiCss3,
} from 'react-icons/di';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMariadb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
    </Row>
  );
}

export default Techstack;
