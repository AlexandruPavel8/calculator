import React  from "react";
import PropTypes from "prop-types";
import Label from './Label';

const Summary = ({currencyFrom, currencyTo, amountFrom, rate, date}) => {
  
    if (amountFrom > 0) {
      
      const amountTo = (amountFrom * rate).toFixed(2);
      
      const summaryLabel = amountFrom + " " + currencyFrom + " is equal to " + amountTo + " " + currencyTo;
      const conversionDateLabel = "Conversion date is " + date;

      return (
        <div id="SummaryDiv">
          <Label labelText={summaryLabel} fontSize = {20} fontWeight="bold" textAlign="center" />
          <br/><br/>
          <Label labelText={conversionDateLabel} fontSize = {15} fontWeight="bold"/>
        </div>
      );
    } 
    else {
      return null;
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
