import React from 'react';
import './signup.css';
import {Col, Row} from 'react-bootstrap';
import SignUpForm from '../signUpForm/signUpForm';
// Import image
import track from '../../assets/images/track.jpg';

const SignUp = () => {
  return <div className="signUpWrapper">
    <Row>
      <div><img src={track} className="signUpImage"/></div>
      <div className="signUpRightSide">
        <Row className="signUpTitle">
          <h1>Fitness App X</h1>
        </Row>
        <Row className="signUpSubTitle">
          <p>Please complete to create an account</p>
        </Row>
        <div className="signUpFormWrapper">
          <SignUpForm/>
        </div>
      </div>
    </Row>
  </div>
}



export default SignUp;
