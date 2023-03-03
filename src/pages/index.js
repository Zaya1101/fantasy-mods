import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";

const IndexPage = () => {
  return (
    <Layout>

      <Hero />

      <Container fluid>
        <Row className="d-flex justify-content-center py-4">
          <Col xs={12} md={8} className="d-flex justify-content-center">
            <h3>Our Choice of Upgraded Specs for Your Vehicle</h3>  
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={{span: 4}}>
            <StaticImage src="../images/2 series F22/DEBADGE service $29.99.jpg" style={{height: "300px", width: "100%", objectFit: "cover", borderRadius: "10px"}}/>
            <p>BMW 2 Series F22</p>
          </Col>
          <Col xs={12} md={{span: 4, offset: 2}}>
            <StaticImage src="../images/3 series F30/BMW 3 series f30 GLOSS BLACK Spoiler $199.99.png" style={{height: "300px", width: "100%", objectFit: "cover", borderRadius: "10px"}}/>
            <p>BMW 3 Series F30</p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center pt-5">
          <Col xs={12} md={{span: 4}}>
            <StaticImage src="../images/4 series F32/DEBADGING SERVICE $29.99.jpg" style={{height: "300px", width: "100%", objectFit: "cover", borderRadius: "10px"}}/>
            <p>BMW 4 Series F32</p>
          </Col>
          <Col xs={12} md={{span: 4, offset: 2}}>
            <StaticImage src="../images/4 series F32/V Brace Blue F32 $149.99.png" style={{height: "300px", width: "100%", objectFit: "cover", borderRadius: "10px"}}/>
            <p>BMW 5 Series F</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default IndexPage;

export const Head = () => <title>Fantasy Mods Australia</title>