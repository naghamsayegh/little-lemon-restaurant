import React from "react";
import "../Style/Cards.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Cards = (props) => {
  const menus = props.menus;
  return (
    <section className="block blog-block">
      <Container className="container-width">
        <div className="menu-header">
          <h1 className="menu-header-text">This Week's Special</h1>
          <Button className="menu-header-button">Online Menu </Button>
        </div>
        <Row>
          {menus.map((menu) => (
            <Col sm={4}>
              <div className="holder">
                <Card className="menu-card">
                  <Card.Img
                    variant="top"
                    src={menu.image}
                    className="card-menu-img"
                  />
                  <Card.Body className="menu-body">
                    <Card.Title className="menu-card-name-price">
                      {menu.name}
                      <span className="menu-price">{menu.price}</span>
                    </Card.Title>
                    <Card.Text className="menu-description">
                      {menu.desc}
                    </Card.Text>
                  </Card.Body>
                  <h4 class="menu-order-online">Order Online</h4>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
