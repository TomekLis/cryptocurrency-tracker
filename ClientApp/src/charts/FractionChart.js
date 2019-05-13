import React from 'react';
import { Line } from 'react-chartjs-2';
import ConfigurableChart  from './ConfigurableChart'
import { calculateBusiestHour, calculateAverage } from '../charts/calculation/BusyHour'

class FractionChart extends React.Component {


  render() {

    return (
      <ConfigurableChart data={this.props.data}
        startLine={this.props.busyHour.startMinute} endLine={this.props.busyHour.endMinute} />
    );
  }
};
export default FractionChart
