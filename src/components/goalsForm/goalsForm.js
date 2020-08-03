import React, {Component} from 'react';
import {Button, Row, Col, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './goalsForm.css';

// Importing Images
import waterImage from '../../../src/assets/icons/water.png';
import stepImage from '../../../src/assets/icons/steps.png';
import calorieImage from '../../../src/assets/icons/calories_burn.png';



class GoalsForm extends Component {

  data2 = [{key:1, image:waterImage , name: "Water Intake" },
           {key:2, image:stepImage , name: "Water Intake" },
           {key:3, image:calorieImage , name: "Water Intake", }
          ];

  render(){
    return(
      <div className="goalsFormWrapper">
        <Row><h1>Tell Us About Your Goals</h1></Row>
        <Row>
          {this.data2.map((goalDataX, idx)=>(
            <Col key={idx}>
              <Row><img src={goalDataX.image} alt="Missign image" className="goalsImage"/></Row>
              <Row><p>{goalDataX.name}</p></Row>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter Your Goal" />
                </Form.Group>
              </Form>
            </Col>))}
        </Row>
        <Row>
          <Col><Link to="/signup"><Button onclick="/dashboard">Cancel</Button></Link></Col>
          <Col><Link to="/dashboard"><Button onclick="/dashboard">Complete</Button></Link></Col>
        </Row>
      </div>
    )
  }
}


export default GoalsForm;
