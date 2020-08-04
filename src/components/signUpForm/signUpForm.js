import React, {Component} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './signUpForm.css';

class SignUpForm extends Component {
  render(){
    return(
      <div className="signUpForm">
        <Form>
          <Row>
            <div>
              <Form.Control placeholder="First name" />
            </div>
            <div>
              <Form.Control placeholder="Last name" />
            </div>
          </Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="username" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree with terms and conditions" />
          </Form.Group>
          <div className="signUpButtonSection">
              <Link to="/goals"><Button variant="primary" type="submit" className="signUpButton"> Sign Up </Button></Link>
          </div>
        </Form>
      </div>
    )
  }
}


export default SignUpForm;
