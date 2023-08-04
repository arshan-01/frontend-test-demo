import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer py-5" style={{ fontSize: "13px" }}>
      <hr style={{ borderTop: "1px solid grey" }} />
      <Container
        fluid
        style={{
          width: "80%",
          marginTop: "0 300px",
          listStyle: "none",
          textDecoration: "none",
          color: "white",
        }}
      >
        <Row>
          <Col xs={12} md={6} lg={2} className="mb-3 mb-md-0">
            <p>Jobs by Location</p>
            <div className="footer-block-content">
              <ul className="list-unstyled">
                <li>
                  <a id="footer-jobs-bangalore" href="/jobs-in-bangalore/">
                    Jobs in Bangalore
                  </a>
                </li>
                <li>
                  <a id="footer-jobs-delhi-ncr" href="/jobs-in-delhi-ncr/">
                    Jobs in Delhi / NCR
                  </a>
                </li>
                <li>
                  <a id="footer-jobs-hyderabad" href="/jobs-in-hyderabad/">
                    Jobs in Hyderabad
                  </a>
                </li>
                <li>
                  <a id="footer-jobs-mumbai" href="/jobs-in-mumbai/">
                    Jobs in Mumbai
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} lg={2} className="mb-3 mb-md-0">
            <p>Jobs by Function</p>
            <div className="footer-block-content">
              <ul className="list-unstyled">
                <li>
                  <a
                    id="footer-software-engineering-jobs"
                    href="/software-engineering-jobs/"
                  >
                    Software Engineering Jobs
                  </a>
                </li>
                <li>
                  <a id="footer-marketing-jobs" href="/marketing-jobs/">
                    Marketing Jobs
                  </a>
                </li>
                <li>
                  <a id="footer-sales-jobs" href="/sales-and-business-jobs/">
                    Sales Jobs
                  </a>
                </li>
                <li>
                  <a id="footer-internship-jobs" href="/internship-jobs/">
                    Internship Jobs
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} lg={2} className="mb-3 mb-md-0">
            <p>Social Media</p>
            <div className="footer-block-content">
              <ul className="list-unstyled">
                <li>
                  <a id="footer-employer-register" href="/employers/register/">
                    Post Your Jobs
                  </a>
                </li>
                <li>
                  <a
                    id="footer-success-stories"
                    href="https://resources.instahyre.com/case-study/"
                    target="_blank"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    id="footer-blog"
                    href="https://resources.instahyre.com"
                    target="_blank"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} lg={2} className="mb-3 mb-md-0">
            <p>Links</p>
            <div className="footer-block-content">
              <ul className="list-unstyled">
                <li>
                  <a id="footer-about" href="/about/">
                    About
                  </a>
                </li>
                <li>
                  <a id="footer-privacy" href="/privacy/">
                    Privacy
                  </a>
                </li>
                <li>
                  <a id="footer-terms" href="/terms/">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} lg={2} className="mb-3 mb-md-0">
            <p>Connect</p>
            <div className="footer-block-content">
              <ul className="list-unstyled">
                <li>
                  <a id="footer-jobs-bangalore" href="/jobs-in-bangalore/">
                    Help Center
                  </a>
                </li>
                <li>
                  <a id="footer-jobs-delhi-ncr" href="/jobs-in-delhi-ncr/">
                    Contact Us
                  </a>
                </li>
                <li>
                  <span className="social-icons">
                    <FaLinkedin />
                    <FaFacebook />
                    <FaTwitter />
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
