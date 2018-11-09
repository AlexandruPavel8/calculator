import React, { Component } from 'react';
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
                            value={this.props.convert}
                        />

                        <ControlLabel>The conversion rate is:</ControlLabel>
                        <FormControl readOnly
                            type="text"
                            value={this.props.rate} 
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
            <Summary amount={this.state.value} rate={this.props.rate} currencies={this.props.convert} date={this.props.date} />
            </div>
          </div>
        );
      }
}

export default Calculator;