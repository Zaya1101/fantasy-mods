import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-image">
      <Container fluid>
        <Row className="d-flex justify-content-center text-center">
          <Col xs={12} md={8}>
            <h1 className="fw-semibold">Fantasy Mods Australia</h1>
            <h2>Brisbane-based service in which a technician comes to you and installs your Fantasy-tailored spec</h2>  
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;