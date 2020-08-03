import React from 'react';
import './signup.css';
import {Container,Col, Row} from 'react-bootstrap';
import SignUpForm from '../signUpForm/signUpForm';
// Import image
import track from '../../assets/images/track.jpg';

const SignUp = () => {
  return <div>
    <Row>
      <Col><img src={track} className="signUpImage"/></Col>
      <Col>
        <Row>
          <h1>Fitness App X</h1>
        </Row>
        <Row>
          <p>Please complete to create an account</p>
        </Row>
        <Row>
          <SignUpForm/>
        </Row>
      </Col>
    </Row>
  </div>
}



export default SignUp;
