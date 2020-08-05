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
          <p className="loginFormSubTitle">Welcome back! Please sign into your account</p>
        </div>
        <Form className="loginFormInput">
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Username" style={{borderTop:"none",borderLeft:"none",borderRight:"none",borderBottomRightRadius:"0",borderBottomLeftRadius: 0}}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" style={{borderTop:"none",borderLeft:"none",borderRight:"none",borderBottomRightRadius:"0",borderBottomLeftRadius: 0}}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <div className="buttonSection">
              <Link to="/dashboard"><Button variant="primary" type="submit" className="loginButton" style={{backgroundColor: "#43425D", color:"white", borderColor: "#43425D"}}> Login </Button></Link>
              <Link to="/signup"><Button variant="primary" type="submit" className="signUpButton" style={{  backgroundColor: "transparent", color: "#43425D", borderColor: "#43425D"}}> Sign Up </Button></Link>
          </div>
        </Form>
      </div>
    )
  }
}


export default LoginForm;
