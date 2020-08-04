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
           {key:2, image:stepImage , name: "Daily Steps" },
           {key:3, image:calorieImage , name: "Calorie Burn", }
          ];

  render(){
    return(
      <div className="goalsFormWrapper">
        <div><h1>Tell Us About Your Goals</h1></div>
        <Row className="goalsCard">
          {this.data2.map((goalDataX, idx)=>(
            <div key={idx} className="goalsCardI">
              <img src={goalDataX.image} alt="Missign image" className="goalsImage"/>
              <p>{goalDataX.name}</p>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter Your Goal" />
                </Form.Group>
              </Form>
            </div>))}
        </Row>
        <div className="buttonSection">
          <Link to="/signup"><Button onclick="/dashboard" className="cancelButton">Cancel</Button></Link>
          <Link to="/dashboard"><Button onclick="/dashboard" className="completeButton">Complete</Button></Link>
        </div>
      </div>
    )
  }
}


export default GoalsForm;
