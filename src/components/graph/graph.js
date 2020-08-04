import React, {Component} from 'react';
import {XYPlot, LineSeries, XAxis, VerticalBarSeries, LabelSeries, DiscreteColorLegend} from 'react-vis';
import './graph.css';


class Graph extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    fetch("https://enigmatic-shelf-30666.herokuapp.com/fitnessprogress/d7eeaa96-89ec-402c-a071-fc6f8b85e039")
      .then(res => res.json())
      .then(
        (rawData) => {
          console.log(rawData);
          this.setState({
            data: this.parseData(rawData)
          });
        });
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

    return rawData.reduce((data, value) => {
      data.water.push({
        x: value.created,
        y: value.water / maximums.water
      });
    
      data.steps.push({
        x: value.created,
        y: value.steps / maximums.steps
      });
    
      data.calories.push({
        x: value.created,
        y: value.calories / maximums.calories
      });
    
      return data;
    }, {
      water: [],
      steps: [],
      calories: []
    });
  }

  render(){

    const graphWidth = 900;
    const graphHeight = 300;
    const graphDomain = [0, 1];

    if(!this.state.data) return <div></div>;

    return(
      <div>
        <XYPlot xType="ordinal" width={graphWidth} height={graphHeight} yDomain={graphDomain}>
          <XAxis />
              
          <LineSeries
              color = "#316fd5"
              style={{strokeWidth: 3}}
              data={this.state.data.water} />
          <VerticalBarSeries
              color = "#316fd5"
              data = {this.state.data.water} />
          <LineSeries
              color = "#3bb1c1"
              style={{strokeWidth: 3}}
              data={this.state.data.steps} />
          <VerticalBarSeries
              color = "#3bb1c1"
              data={this.state.data.steps} /> 
          <LineSeries
              color = "#ee3769"
              style={{strokeWidth: 3}}
              data={this.state.data.calories} />
          <VerticalBarSeries
              color = "#ee3769"
              data={this.state.data.calories} /> 


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

export default Graph;
