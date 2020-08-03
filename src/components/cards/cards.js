import React,{Component} from 'react';
import {Card, Row, Col, Container, Button} from 'react-bootstrap';
import waterImage from '../../../src/assets/icons/water.png';
import stepImage from '../../../src/assets/icons/steps.png';
import calorieImage from '../../../src/assets/icons/calories_burn.png';

import './cards.css';

class GoalCard extends Component {


buttonClick = () => {
  console.log("button Was Clicked, and map should shange");
}

// Correct data structure
data = [{name:"Water Consumption", color:"primary", units:"Gal", amount:"1.2", message:"You're on track", image:waterImage},
        {name:"Footsteps", color:"info", units:"Steps", amount:"1.5K", message:"You need to stop", image:stepImage},
        {name:"Calorie Burn", color:"danger", units:"Cal", amount:"6K", message:"You might want to starve for a couple of days", image:calorieImage, backgroundColor:"linear-gradient(45deg, #ff3b70, #8d2440)"},
       ];

  render(){
    return(
      <div>
      <Row>
      {this.data.map((cardData, idx)=> (
        <Col key={idx}>
            <Card bg={cardData.color} style={{ width: '18rem', borderRadius:'1.5rem' }} className="card" onClick={this.buttonClick}>
              <Card.Body>
                <Card.Title><img src={cardData.image}className="cardImage" alt="Missing Image"/></Card.Title>
                <Card.Title className="cardAmount" style={{fontSize:"7rem"}}>{cardData.amount}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{cardData.units}</Card.Subtitle>
                <Card.Text>
                  {cardData.message}
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      ))}
      </Row>
      </div>

    )
  }

}



export default GoalCard;
