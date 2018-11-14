import React, { Component } from "react";
import PropTypes from "prop-types";
class Summary extends Component {
  render() {
    if (this.props.amountFrom > 0) {
    const amountTo = (this.props.amountFrom * this.props.rate).toFixed(2);
      return (
        <div id="SummaryDiv">
          <h4 align="center">
            {this.props.amountFrom} {this.props.currencyFrom} is equal to{" "}
            {amountTo} {this.props.currencyTo}
          </h4>
          <br />
          <h6 align="left">Conversion date is {this.props.date}</h6>
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
