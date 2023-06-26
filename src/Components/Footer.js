import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import footerStyle from "../Style/Footer.css";

import restaurant from "../Assets/Images/restaurant.jpg";

function Footer() {
  return (
    <footer className="main-footer">
      <Container>
        <Row>
          <Col className="col-md-3 col-sm-6">
            <Image src={restaurant} alt="Restaurant" fluid />
          </Col>
          <Col className="col-md-3 col-sm-6">
            <section>
              <ul className="list-unstyled footer-links">
                <li>
                  <a href="home">Home</a>
                </li>

                <li>
                  <a href="About">About</a>
                </li>

                <li>
                  <a href="Menu">Menu</a>
                </li>

                <li>
                  <a href="Reservations">Reservations</a>
                </li>

                <li>
                  <a href="Order Online">Order Online</a>
                </li>

                <li>
                  <a href="Order Online">Login</a>
                </li>
              </ul>
            </section>
          </Col>
          <Col className="col-md-3 col-sm-6">
            <h2 className="footer-header">Contact</h2>
            <ul className="list-unstyled footer-links">
              <li>Address</li>
              <li>Email Address</li>
              <li>Phone Number</li>
            </ul>
          </Col>
          <Col className="col-md-3 col-sm-6">
            <h2 className="footer-header">Social Media Links</h2>
            <ul className="list-unstyled footer-links">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </Col>
        </Row>

        <div className="footer-bottom">
          <div className="text-xs-center">
            &copy;{new Date().getFullYear()} Little Lemon Restaurant - All
            Rights Reserved
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
