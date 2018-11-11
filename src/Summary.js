import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Summary extends Component {
  render() {
    const conversionAmount = this.props.rate * this.props.amount;
    const conversionCurrency = this.props.conversionFromTo.split("->");
    return (
      <div id = "SummaryDiv">
        <h4 align="center">{this.props.amount} {conversionCurrency[0]} is equal to {conversionAmount} {conversionCurrency[1]}</h4>      
        <br/>
        <h6 align="left">Conversion date is {this.props.date.toDateString()}</h6>      
      </div>
    );
  }
}

Summary.propTypes=
      {
        amount: PropTypes.number,
        rate: PropTypes.number,
        conversionFromTo: PropTypes.string,
        date: PropTypes.instanceOf(Date)
      };

export default Summary;