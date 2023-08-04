import React from "react";
import companies from "../assets/companies.png";
import { Container, Row, Col } from "react-bootstrap";
function Companies() {
  return (
    <Container
      className="d-flex justify-content-center"
      style={{ marginTop: "80px" }}
    >
      <Row>
        <h4 className="d-flex justify-content-center align-items-center">
          More than 10,000 top companies
        </h4>
        <img src={companies} alt="" />
      </Row>
    </Container>
  );
}

export default Companies;
