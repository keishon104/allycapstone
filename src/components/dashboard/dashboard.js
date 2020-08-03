import React, {Component} from 'react';
import './dashboard.css';
import {Container, Row, Col} from 'react-bootstrap';
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
