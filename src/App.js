import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import {Route, Switch} from 'react-router-dom';
// importing Page
import Login from './components/login/login.js';
import SignUp from './components/signup/signup';
import Goals from './components/enterGoals/enterGoals';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Login} exact path="/"/>
        <Route exact component={Dashboard} path="/dashboard/:userId"/>
        <Route component={SignUp} path="/signup"/>
        <Route exact component={Goals} path="/goals/:userId"/>
      </Switch>
    </div>
  );
}

export default App;
