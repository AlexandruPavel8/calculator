import React, { Component } from "react";
import PropTypes from "prop-types";
import Label from './Label';
class Summary extends Component {
  render() {
    if (this.props.amountFrom > 0) {
    const amountTo = (this.props.amountFrom * this.props.rate).toFixed(2);
    const summaryLabel = this.props.amountFrom + " " + this.props.currencyFrom + " is equal to " + amountTo + " " + this.props.currencyTo;
    const conversionDateLabel = "Conversion date is " + this.props.date;

      return (
        <div id="SummaryDiv">
          <Label labelText={summaryLabel} fontSize = {20} fontFamily="Times New Roman" fontWeight="bold" color="black" textAlign="center" />
          <Label labelText={conversionDateLabel} fontSize = {15} fontFamily="Times New Roman" fontWeight="bold" color="black" textAlign="left"/>
        </div>
      );
    } else {
      return null;
    }
  }
}

Summary.propTypes = {
  currencyFrom: PropTypes.string,
  currencyTo: PropTypes.string,
  amountFrom: PropTypes.number,
  rate: PropTypes.number,
  date: PropTypes.string
};

export default Summary;
