import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineHtml5 } from "react-icons/ai";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

function Works() {
  return (
    <Container
      style={{
        width: "80%",
        marginTop: "100px",
        marginBottom: "100px",
        marginRight: "0",
      }}
      className="d-flex justify-content-center align-items-center flex-column"
    >
      <Row>
        <Col style={{ width: "100%" }}>
          <h5>5X Heigher Response From companies</h5>
          <p>
            There are a few ways to add icons when using React. The easiest way
            is to use Dynamic Icon Importing which automatically imports the
            icons you're using - and only the icons you're using.
          </p>
        </Col>
        <Col>
          <img style={{ marginLeft: "50px" }} src={img1} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>5X Heigher Response From companies</h5>
          <p>
            There are a few ways to add icons when using React. The easiest way
            is to use Dynamic Icon Importing which automatically imports the
            icons you're using - and only the icons you're using.
          </p>
        </Col>
        <Col>
          <img style={{ marginLeft: "50px" }} src={img2} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>5X Heigher Response From companies</h5>
          <p>
            There are a few ways to add icons when using React. The easiest way
            is to use Dynamic Icon Importing which automatically imports the
            icons you're using - and only the icons you're using.
          </p>
        </Col>
        <Col>
          <img style={{ marginLeft: "50px" }} src={img3} />
        </Col>
      </Row>
    </Container>
  );
}

export default Works;
