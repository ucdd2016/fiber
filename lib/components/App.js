import React, {Component, PropTypes} from 'react'

import FiberMap from './FiberMap'
import FiberCostTable from './FiberCostTable'

import ChartistGraph from 'react-chartist'
class Pie extends React.Component {
  render() {

    var data = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    };

    var options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };

    var type = 'Bar'

    return (
      <div>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    )
  }
}


export default class App extends Component {

  render(){
    const { numActivities, numObservations } = this.props
    return <div className="row">
        <div className="col s4">
          <h2>Summary</h2>
          <div>Number of activities: { numActivities }</div>
          <div>Number of observations: { numObservations }</div>
          <h2>Timeline</h2>
          <div><Pie/></div>
        </div>
        <div className="col s8">
          <FiberMap {...this.props}/>
        </div>
      </div>
  }


  render1(){
    const { fibers } = this.props
    return <div className="row">
        <div className="col s4">
          <FiberCostTable {...this.props}/>
        </div>
        <div className="col s8">
          <FiberMap {...this.props}/>
        </div>
      </div>
  }
}
