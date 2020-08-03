import React, {Component} from 'react';
import {XYPlot, LineSeries, XAxis, YAxis, VerticalBarSeries, LabelSeries} from 'react-vis';
import './graph.css';


class Graph extends Component {
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
    const graphWidth = 900;
    const graphHeight = 300;
    const graphDomain = [0, 5];

    return(
      <div>
        <XYPlot xType="ordinal" width={graphWidth} height={graphHeight} yDomain={graphDomain}>
                <XAxis />
                <YAxis />
          <VerticalBarSeries data={graphData} />
          <LineSeries data={graphData2} />
          <LabelSeries
                    data={graphData.map(obj => {
                        return { ...obj, label: obj.y.toString() }
                    })}
                    labelAnchorX="middle"
                    labelAnchorY="text-after-edge" />
        </XYPlot>
      </div>
    )
  }
}

export default Graph;
