// Dashboard.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import ExercisePlan from './ExercisePlan';

function Dashboard() {
  const [weightData, setWeightData] = useState([]);
  const [calorieData, setCalorieData] = useState([]);
  const [exercisePlan, setExercisePlan] = useState({});

  useEffect(() => {
    // Fetch data from API
    fetch('/api/weight-data')
      .then(response => response.json())
      .then(data => setWeightData(data));

    fetch('/api/calorie-data')
      .then(response => response.json())
      .then(data => setCalorieData(data));

    fetch('/api/exercise-plan')
      .then(response => response.json())
      .then(data => setExercisePlan(data));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <h2>Weight Graph</h2>
          <LineChart width={500} height={300} data={weightData}>
            <Line type="monotone" dataKey="weight" stroke="#8884d8" />
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
          </LineChart>
        </Col>
        <Col md={6}>
          <h2>Calorie Intake Graph</h2>
          <LineChart width={500} height={300} data={calorieData}>
            <Line type="monotone" dataKey="calories" stroke="#8884d8" />
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
          </LineChart>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Exercise Plan</h2>
          <ExercisePlan exercisePlan={exercisePlan} />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;