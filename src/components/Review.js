import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "./review.css";
import Button from "react-bootstrap/Button";
function Review() {
  return (
    <Container
      style={{ width: "70%", marginTop: "100px", marginBottom: "50px" }}
    >
      <Row>
        <Col className="review">
          <p>
            {" "}
            "It was a really cool experience with Instahyre. It was very simple
            and clean without the bugging from job consultants. Keep up the good
            work guys!"
          </p>
        </Col>
        <Col className="review mx-4">
          <p>
            {" "}
            "Little did i know about the reach of Instayers. They have hundreds
            of start-up searching for Condidates. I received a number good
            number of offers."
          </p>
        </Col>
      </Row>

      <Row className="container">
        <Col className="imgContainer" id="img1">
          <img src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg" />
          <div className="person">
            <p className="mx-2">Tushar, Hired By paytm</p>
            <p className="mx-2" style={{ color: "gray" }}>
              as Senior Engineering Manager
            </p>
          </div>
        </Col>

        <Col className="imgContainer " id="img1">
          <img src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg" />
          <div className="person">
            <p className="mx-2">Tushar, Hired By paytm</p>
            <p className="mx-2" style={{ color: "gray" }}>
              as Software Developer
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="Button">
          <Button
            style={{
              boxShadow: " 0px 2px 0px #888888",
              backgroundColor: "#84bd91",
              borderColor: "#a8d3b0",
            }}
          >
            Your Dream Job <AiOutlineDoubleRight />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Review;
