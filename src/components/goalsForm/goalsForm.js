import React, {Component} from 'react';
import {Button, Row, Form} from 'react-bootstrap';
import {Link, withRouter, Redirect} from 'react-router-dom';
import './goalsForm.css';

// Importing Images
import waterImage from '../../../src/assets/icons/water.png';
import stepImage from '../../../src/assets/icons/steps.png';
import calorieImage from '../../../src/assets/icons/calories_burn.png';



class GoalsForm extends Component {

  data2 = [{key:1, image:waterImage , name: "Water Intake (Gallons)", example: 1.2,  fieldName: "recordedWaterIntake" },
           {key:2, image:stepImage , name: "Daily Steps (thousands)", example: 10, fieldName: "recordedDailySteps" },
           {key:3, image:calorieImage , name: "Calorie Burn", example: 1543, fieldName: "recordedCaloriesBurned" }
          ];

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

    const { userId } = this.props.match.params;

    fetch(`https://enigmatic-shelf-30666.herokuapp.com/fitnessuser/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.formValues)
    })
    .then(res => res.json())
    .then((updatedUser) => {
      this.setState({userId:updatedUser.id});
    })
    .catch(error => console.error);
  }

  render(){
    
    if(this.state.userId) return (<Redirect to={'/dashboard/' + this.state.userId} />)

    return(
      <div className="goalsFormWrapper">
        <div><h1>Tell Us About Your Goals</h1></div>
        <Row className="goalsCard">
          {this.data2.map((goalDataX, idx)=>(
            <div key={idx} className="goalsCardI">
              <img src={goalDataX.image} alt={goalDataX.name} className="goalsImage"/>
              <p>{goalDataX.name}</p>
              <Form>
                <Form.Group>
                  <Form.Control name={goalDataX.fieldName}  placeholder={"Example: " + goalDataX.example} onChange={this.onFieldChange} />
                </Form.Group>
              </Form>
            </div>))}
        </Row>
        <div className="buttonSection">
          <Link to="/signup"><Button className="cancelButton" style={{backgroundColor:"transparent", borderColor:"white"}}>Cancel</Button></Link>
          <Button className="completeButton" onClick={this.onSubmit} style={{backgroundColor:"transparent", borderColor:"white"}}>Complete</Button>
        </div>
      </div>
    )
  }
}


export default withRouter(GoalsForm);
