import React, {Component} from 'react';
import {Form, Button, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './loginForm.css';

class LoginForm extends Component {
  render(){
    return(
      <div className="loginFormWrapper">
        <div>
          <h1>Fitness App X</h1>
        </div>
        <div>
          <p>Welcome back! Please sign into your account</p>
        </div>
        <Form className="loginFormInput">
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Row className="buttonSection">
              <Link to="/dashboard"><Button variant="primary" type="submit" className="loginButton"> Login </Button></Link>
              <Link to="/signup"><Button variant="primary" type="submit" className="signUpButton"> Sign Up </Button></Link>
          </Row>
        </Form>
      </div>
    )
  }
}


export default LoginForm;
