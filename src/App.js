import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import {Container, Button} from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
// importing Page
import Login from './components/login/login.js';
import SignUp from './components/signup/signup';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Login} exact path="/"/>
        <Route component={Dashboard} path="/dashboard"/>
        <Route component={SignUp} path="/signup"/>
      </Switch>
    </div>
  );
}

export default App;
