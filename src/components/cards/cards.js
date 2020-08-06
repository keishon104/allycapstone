import React,{Component} from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import waterImage from '../../../src/assets/icons/water.png';
import stepImage from '../../../src/assets/icons/steps.png';
import calorieImage from '../../../src/assets/icons/calories_burn.png';

import './cards.css';

class GoalCard extends Component {


buttonClick = () => {
  console.log("button Was Clicked, and map should shange");
}

// Correct data structure
 data = [{name:"Water Consumption", color:"primary", units:"Gal", amount:"1.2", initMessage:"Remember to stay hydrated", message:"You're on track", image:waterImage, backgroundColor:"linear-gradient(45deg, #1E4380, #3B86FF)"},
        {name:"Footsteps", color:"info", units:"Steps", amount:"1.5K", initMessage:"Remember to keep moving", message:"You need to stop", image:stepImage, backgroundColor:"linear-gradient(45deg, #286E77, #3FC0D1)"},
        {name:"Calorie Burn", color:"danger", units:"Cal", amount:"6K", initMessage:"Remember to exercise", message:"You might want to starve for a couple of days", image:calorieImage, backgroundColor:"linear-gradient(45deg, #8D2440, #FF3B70)"},
       ];

  render(){
    return(
      <div>
      <Row>
      {this.data.map((cardData, idx)=> (
        <Col key={idx}>
            <Card bg={cardData.color} style={{ width: '18rem', borderRadius:'1.5rem', background:cardData.backgroundColor }} className="card" onClick={this.buttonClick}>
              <Card.Body>
                <Card.Title><img src={cardData.image}className="cardImage" alt={cardData.name}/></Card.Title>
                <Card.Title className="cardAmount" style={{fontSize:"7rem"}}><input type="number" min="0" name="number" placeholder="0" className="cardInput"/></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{cardData.units}</Card.Subtitle>
                <Card.Text>
                  {cardData.initMessage}
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
