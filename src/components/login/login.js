import React from 'react';
import './login.css';
import {Col, Row} from 'react-bootstrap';
import LoginForm from '../loginForm/loginForm';

// Import Image
import workout1 from '../../assets/images/workout1.jpg';


const Login = () => {
  return <div className="loginWrapper">
          <Row>
            <div><img src={workout1} className="loginImage"/></div>
            <div className="loginRightSide">
              <LoginForm/>
            </div>
          </Row>
          </div>
}



export default Login;
