import React from 'react';
import './login.css';
import {Container,Col, Row} from 'react-bootstrap';
import LoginForm from '../loginForm/loginForm';

// Import Image
import workout1 from '../../assets/images/workout1.jpg';


const Login = () => {
  return <div>
          <Row>
            <Col><img src={workout1} className="loginImage"/></Col>
            <Col>
              <Row>
                <h1>Fitness App X</h1>
              </Row>
              <Row>
                <p>Welcome back! Please sign into your account</p>
              </Row>
              <LoginForm/>
            </Col>
          </Row>
          </div>
}



export default Login;
