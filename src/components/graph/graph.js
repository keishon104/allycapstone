import React, {Component} from 'react';
import {XYPlot, LineSeries, XAxis, VerticalBarSeries, LabelSeries, DiscreteColorLegend} from 'react-vis';
import { withRouter } from "react-router";
import './graph.css';


class Graph extends Component {
  state = {
    user: null,
    data: null
  }

  MILLS_IN_DAY = 1000 * 60 * 60 * 24;

  componentDidMount() {
    const { userId } = this.props.match.params;

    if(!userId) return;

    fetch(`https://enigmatic-shelf-30666.herokuapp.com/fitnessuser/${userId}`)
      .then(res => res.json())
      .then((userData) => {
        this.setState({
          user: userData
        });
      })
      .catch(error => console.error);

    fetch(`https://enigmatic-shelf-30666.herokuapp.com/fitnessprogress/${userId}`)
      .then(res => res.json())
      .then((rawData) => {
          this.setState({
            data: this.parseData(rawData)
          });
        })
      .catch(error => console.error);
  }

  getFormattedDateString(isoDateString, daysToSubtract) {
    const date = new Date(isoDateString);

    // Add some days to massage the data for display
    date.setTime(date.getTime() - (this.MILLS_IN_DAY * (daysToSubtract)));

    // Output Example: 6/28
    return (date.getMonth() + 1) + '/' + date.getDate();
  }

  parseData(rawData) {
 
    const maximums = rawData.reduce((maxes, value) => {
      return {
        water: maxes.water < value.water ? value.water : maxes.water,
        steps: maxes.steps < value.steps ? value.steps : maxes.steps,
        calories: maxes.calories < value.calories ? value.calories : maxes.calories 
      };
    }, {
      water: 0,
      steps: 0,
      calories: 0
    });

    return rawData.reduce((data, value, index) => {
      const dateString = this.getFormattedDateString(value.created, rawData.length - index);

      data.water.push({
        x: dateString,
        y: value.water
      });
    
      data.steps.push({
        x: dateString,
        y: value.steps
      });
    
      data.calories.push({
        x: dateString,
        y: value.calories
      });
    
      return data;
    }, {
      water: [],
      steps: [],
      calories: [],
      maximums
    });
  }

  render(){

    const graphWidth = 900;
    const graphHeight = 300;

    if(!this.state.data || !this.state.data.water.length || !this.state.user) return <div></div>;

    let goalLineData = {
      water: [],
      steps: [],
      calories: []
    };

    for(let i = 0; i < this.state.data.water.length; i++) {
      goalLineData.water.push({
        x: this.state.data.water[i].x,
        y: this.state.user.recordedWaterIntake
      });

      goalLineData.steps.push({
        x: this.state.data.steps[i].x,
        y: this.state.user.recordedDailySteps
      });

      goalLineData.calories.push({
        x: this.state.data.calories[i].x,
        y: this.state.user.recordedCaloriesBurned
      });
    }

    return(
      <div>
        <XYPlot xType="ordinal" width={graphWidth} height={graphHeight}>
          <XAxis />
              
          <VerticalBarSeries
              color = "#316fd5"
              data = {this.state.data.water}
              yDomain={[0, Math.max(this.state.data.maximums.water, goalLineData.water[0].y * 2)]} />
          <LineSeries
            color = "#316fd5"
            data = {goalLineData.water}
            yDomain={[0, Math.max(this.state.data.maximums.water, goalLineData.water[0].y * 2)]} />
            
          <VerticalBarSeries
              color = "#3bb1c1"
              data={this.state.data.steps}
              yDomain={[0, Math.max(this.state.data.maximums.steps, goalLineData.steps[0].y * 2)]} /> 
          <LineSeries
            color = "#3bb1c1"
            data = {goalLineData.steps}
            yDomain={[0, Math.max(this.state.data.maximums.steps, goalLineData.steps[0].y * 2)]} />
          <VerticalBarSeries
              color = "#ee3769"
              data = {this.state.data.calories}
              yDomain={[0, Math.max(this.state.data.maximums.calories, goalLineData.calories[0].y * 2)]} />
          <LineSeries
            color = "#ee3769"
            data = {goalLineData.calories} 
            yDomain={[0, Math.max(this.state.data.maximums.calories, goalLineData.calories[0].y * 2)]}/>


          <DiscreteColorLegend
            style={{position: 'absolute', right: '550px', top: '10px', color: "#ffffffb3"}}
            orientation="horizontal"
            items={[
              {
                title: 'water',
                color: '#316fd5'
              },
              {
                title: 'steps',
                color: '#3bb1c1'
              },
              {
                title: 'calories',
                color: "#ee3769"
              }
            ]}
          />
        </XYPlot>
      </div>
    )
  }
}

export default withRouter(Graph);
