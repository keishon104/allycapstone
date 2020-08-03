import React from 'react';
import {Container,Col, Row} from 'react-bootstrap';
import GoalsForm from '../goalsForm/goalsForm';
import './enterGoals.css';


const Goals = () => {
  return <div className="goalsWrapper">
            <Row>
              <Col><GoalsForm/></Col>
            </Row>
          </div>
}



export default Goals;
