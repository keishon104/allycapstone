import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
import waterImage from '../../../src/assets/icons/water.png';
import './cards.css';

class GoalCard extends Component {

// Testing Data structures
data = {water:{name:"Water Intake", units:"Gal", amount:"1.2", message:"You're on track"},
        walking:{name:"Footsteps", units:"Steps", amount:"2.3K", message:"You need to walk more"},
        food:{name:"Calorie Burn", units:"Cal", amount:"6K", message:"You might want to starve for a couple of days"}
      };

data2 = {
        name:["Water Intake", "Footsteps", "Calorie Burn"],
        units:["Gal", "Steps", "Cal"],
        amount:["1.2","2.3K","6K"],
        message:["You're on track", "You need to walk more", "You might want to starve for a couple of days"]
      };
      
  render(){
    return(
      <div>
        <Card bg="primary" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title><img src={waterImage} className="cardImage"/></Card.Title>
            <Card.Title className="cardData">{this.data.water.amount}</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">{this.data.water.units}</Card.Subtitle>

            <Card.Text>
              {this.data.water.message}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

    )
  }

}



export default GoalCard;
