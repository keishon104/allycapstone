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
        <Route component={Dashboard} path="/dashboard"/>
        <Route component={SignUp} path="/signup"/>
        <Route component={Goals} path="/goals"/>
      </Switch>
    </div>
  );
}

export default App;
