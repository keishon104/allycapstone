import React, {Component} from 'react';
import './dashboard.css';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import waterImage from '../../../src/assets/icons/water.png';
import steps from '../../../src/assets/icons/steps.png';
import calories_burn from '../../../src/assets/icons/calories_burn.png';
import GoalCard from '../cards/cards';
import Graph from '../graph/graph';


class Dashboard extends Component{
  render() {
    return(
      <div className="dashboardContainer">
        <Container>
          <Row className="graphSection">
            <Graph/>
          </Row>
          <Row>
            <Col>
              <GoalCard/>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}



export default Dashboard;
