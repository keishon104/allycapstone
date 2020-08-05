import React from 'react';
import {Col} from 'react-bootstrap';
import GoalsForm from '../goalsForm/goalsForm';
import './enterGoals.css';


const Goals = () => {
  return <div className="goalsWrapper">
              <Col><GoalsForm/></Col>
         </div>
}



export default Goals;
