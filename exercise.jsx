// ExercisePlan.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { YouTube } from 'react-youtube';

function ExercisePlan({ exercisePlan }) {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <h2>{exercisePlan.name}</h2>
          <p>{exercisePlan.description}</p>
          <YouTube videoId={exercisePlan.videoId} />
        </Col>
      </Row>
    </Container>
  );
}

export default ExercisePlan;