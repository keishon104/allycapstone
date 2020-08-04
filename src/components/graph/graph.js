import React, {Component} from 'react';
import {XYPlot, LineSeries, XAxis, VerticalBarSeries, LabelSeries, DiscreteColorLegend} from 'react-vis';
import './graph.css';


class Graph extends Component {
  state = {
    mockData: [],
  }

   tempMockData = [
    {water: 1, calories: 23, steps:2},
    {water: 1, calories: 23, steps:2},
    {water: 1, calories: 23, steps:2},
    {water: 1, calories: 23, steps:2},
    {water: 1, calories: 23, steps:2},
    {water: 1, calories: 23, steps:2},
    {water: 1, calories: 23, steps:2},
  ];

  componentDidMount() {

  }
  render(){

    const graphData = [
      {x: "Monday", y: 2},
      {x: "Tuesday", y: 3},
      {x: "Wednesday", y: 1},
      {x: "Thursday", y: 4},
      {x: "Friday", y: 3},
      {x: "Saturday", y: 1},
      {x: "Sunday", y: 1},
    ];

    const graphData2 = [
      {x: "Monday", y: 3},
      {x: "Tuesday", y: 3},
      {x: "Wednesday", y: 3},
      {x: "Thursday", y: 3},
      {x: "Friday", y: 3},
      {x: "Saturday", y: 3},
      {x: "Sunday", y: 3},
    ];

    const stepsData = [
      {x: "Monday", y: 23},
      {x: "Tuesday", y: 9},
      {x: "Wednesday", y: 7},
      {x: "Thursday", y: 15},
      {x: "Friday", y: 2},
      {x: "Saturday", y: 1},
      {x: "Sunday", y: 1},
    ];

    const stepsData2 = [
      {x: "Monday", y: 4},
      {x: "Tuesday", y: 4},
      {x: "Wednesday", y: 4},
      {x: "Thursday", y: 4},
      {x: "Friday", y: 4},
      {x: "Saturday", y: 4},
      {x: "Sunday", y: 4},
    ];

    const calorieData = [
      {x: "Monday", y: 5},
      {x: "Tuesday", y: 3},
      {x: "Wednesday", y: 1},
      {x: "Thursday", y: 10},
      {x: "Friday", y: 15},
      {x: "Saturday", y: 7},
      {x: "Sunday", y: 12},
    ];

    const calorieData2 = [
      {x: "Monday", y: 7},
      {x: "Tuesday", y: 7},
      {x: "Wednesday", y: 7},
      {x: "Thursday", y: 7},
      {x: "Friday", y: 7},
      {x: "Saturday", y: 7},
      {x: "Sunday", y: 7},
    ];

    const mockData = [
      {id: "0", water: "1", calories: "500", steps:"123"},
      {id: "1", water: "22", calories: "400", steps:"222"},
      {id: "2", water: "4", calories: "230", steps:"59"},

    ];
    const graphWidth = 900;
    const graphHeight = 300;
    const graphDomain = [0, 10];

    return(
      <div>
        <XYPlot xType="ordinal" width={graphWidth} height={graphHeight} yDomain={graphDomain}>
          <XAxis />
              
          <LineSeries
              color = "#316fd5"
              style={{strokeWidth: 3}}
              data={graphData2} />
          <VerticalBarSeries
              color = "#3bb1c1"
              data = {this.tempMockData} />
          <LineSeries
              color = "#3bb1c1"
              style={{strokeWidth: 3}}
              data={stepsData2} />
          <VerticalBarSeries
              color = "#ee3769"
              data={this.tempMockData} /> 


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
