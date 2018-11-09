import React, { Component } from 'react';

class Summary extends Component {
  render() {
    const conversion = this.props.rate * this.props.amount;
    const conversionCurrency = this.props.currencies.split("->");
    return (
      <div id = "SummaryDiv">
        <h4 align="center">{this.props.amount} {conversionCurrency[0]} is equal to {conversion} {conversionCurrency[1]}</h4>      
        <br/>
        <h6 align="left">Conversion date is {this.props.date.toDateString()}</h6>      
      </div>
    );
  }
}

export default Summary;