import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";

import TwoSeries from "../images/2 series F22/DEBADGE service $29.99.jpg"

const IndexPage = () => {
  return (
    <Layout>

      <Hero />

      <Container fluid>
        <Row className="d-flex justify-content-center pt-2 pb-5">
          <Col xs={12} md={8} className="d-flex justify-content-center">
            <h3>Our Choice of Upgraded Specs for Your Vehicle</h3>  
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={4}>
            <Image src={TwoSeries} fluid/>
          </Col>
          <Col xs={12} md={4}>
            <Image src={TwoSeries} fluid/>
          </Col>
          <Col xs={12} md={4}>
            <Image src={TwoSeries} fluid/>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default IndexPage;

export const Head = () => <title>Fantasy Mods Australia</title>
