import React, {Component} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class LoginForm extends Component {
  render(){
    return(
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Row>
              <Link to="/dashboard"><Button variant="primary" type="submit"> Login </Button></Link>
              <Link to="/signup"><Button variant="primary" type="submit"> Sign Up </Button></Link>
          </Row>
        </Form>
      </div>
    )
  }
}


export default LoginForm;
