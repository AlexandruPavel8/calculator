import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import './Calculator.css';
import Summary from './Summary';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 1};
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

      render() {
          const {conversionFromTo, date, rate} = this.props
        return (
          <div id="CalculatorAndSummaryDiv" className="calculatorAndSummaryStyle">
          
            <div id = "CalculatorDiv" className="calculatorStyle">
                <h3>Enter here the data for the conversion:</h3>
                <br/>
                <form >
                <FormGroup controlId="exchangeFormGroup">
                        <ControlLabel>The conversion will be:</ControlLabel>
                        <FormControl readOnly
                            type="text"
                            value={conversionFromTo}
                        />

                        <ControlLabel>The conversion rate is:</ControlLabel>
                        <FormControl readOnly
                            type="text"
                            value={rate} 
                        />

                        <ControlLabel>Enter amount to convert</ControlLabel>
                        <FormControl
                            type="number"
                            value={this.state.value}
                            placeholder="Enter amount to convert"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                </form>
            </div>
            
            <div className="summaryStyle">
            <h3>The conversion has the following results</h3>
            <br/>
            <Summary amount={this.state.value} rate={rate} conversionFromTo={this.props.conversionFromTo} date={date} />
            </div>
          </div>
        );
      }
}

Calculator.propTypes=
      {
        conversionFromTo: PropTypes.string,
        rate: PropTypes.number,
        date: PropTypes.instanceOf(Date)
      };

export default Calculator;