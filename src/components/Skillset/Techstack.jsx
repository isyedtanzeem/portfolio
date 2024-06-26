import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiJava,
 
} from "react-icons/di";
import {
  SiMaterialui,
  SiSpringboot,
  SiAngular,
  SiRedux,
  SiMysql,
  SiHtml5,
  SiHibernate
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate />
      </Col>
    </Row>
  );
}

export default Techstack;
