import React, {Component} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import './signUpForm.css';

class SignUpForm extends Component {
  state = {
    userId: '',
    formValues: {}
  }

  onFieldChange = (evt) => {
    this.setState({ 
      formValues: {
        ...this.state.formValues,
        [evt.target.name]: evt.target.value
      }
    });
  }

  onSubmit = evt => {
    evt.preventDefault();

    fetch('https://enigmatic-shelf-30666.herokuapp.com/fitnessuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.formValues)
    })
    .then(res => res.json())
    .then((newUser) => {
      if(newUser.id) this.setState({userId:newUser.id});
    })
    .catch(error => console.error);
  }

  render(){

    if(this.state.userId) return (<Redirect to={'/goals/' + this.state.userId} />)

    return(
      <div className="signUpForm">
        <Form>
          <Row className="signUpFormName">
            <div>
              <Form.Control placeholder="First name" name="firstName" onChange={this.onFieldChange} />
            </div>
            <div>
              <Form.Control placeholder="Last name" name="lastName" onChange={this.onFieldChange}  />
            </div>
          </Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" name="email" onChange={this.onFieldChange}  />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Confirm Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password"  />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree with terms and conditions" />
          </Form.Group>
          <div className="signUpButtonSection">
              <Button variant="primary" type="submit" className="signUpButton"  style={{background:"#43425D", color:"white", borderColor: "#43425D"}} onClick={this.onSubmit}> Sign Up </Button>

          </div>
        </Form>
      </div>
    )
  }
}


export default SignUpForm;
