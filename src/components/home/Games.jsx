import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Games = ({ heading, games }) => {
  return (
    <section className="experience-section">
    <Jumbotron fluid id="games" className="bg-dark text-white m-0">
      <Container>
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        {games.map((game, index) => (
          <div key={index} className="game-section">
            <Row className="align-items-center">
              <Col md={6}>
                <img
                  src={game.image}
                  alt={game.title}
                  className="img-fluid game-image"
                />
              </Col>
              <Col md={6} className="game-info">
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                <a href={game.link} className="btn btn-primary">
                  Play Now
                </a>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </Jumbotron>
    </section>
  );
};

export default Games;