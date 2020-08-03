import React, {Component} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class SignUpForm extends Component {
  render(){
    return(
      <div>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
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
          <Row>
              <Link to="/goals"><Button variant="primary" type="submit"> Sign Up </Button></Link>
          </Row>
        </Form>
      </div>
    )
  }
}


export default SignUpForm;
