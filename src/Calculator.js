import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import './Calculator.css';
import Summary from './Summary';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amountFrom: 0,
            currencyTo: "USD",
            rate: 0,
            date: "2018-11-14"
        };
    
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.handleChangeCurrencyTo = this.handleChangeCurrencyTo.bind(this);
      }

      handleChangeAmount = async (event) => {
        this.setState({amountFrom: parseFloat(event.target.value)});
        const response = await fetch('http://data.fixer.io/api/latest?access_key='+process.env.REACT_APP_FIXER_API_KEY+'&base=EUR&symbols='+this.state.currencyTo);
        const exchangeDate =  await response.json();
        this.setState({rate: Object.values(exchangeDate.rates)[0]});
        this.setState({date: exchangeDate.date});
      }

      handleChangeCurrencyTo(event) {
        this.setState({currencyTo: event.target.value});
        this.setState({amountFrom: 0});
      }

      render() {
        return (
          <div id="CalculatorAndSummaryDiv" className="calculatorAndSummaryStyle">
          
            <div id = "CalculatorDiv" className="calculatorStyle">
                <h3>Enter here the data for the conversion:</h3>
                <br/>
                <form >
                <FormGroup controlId="exchangeFormGroup">
                        <ControlLabel>Convert From Currency:</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" readOnly>
                            <option value="EUR">EUR</option>
                        </FormControl>
                        
                        <ControlLabel>Convert To Currency:</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" onChange={this.handleChangeCurrencyTo}>
                            <option value="USD">USD</option>
                            <option value="RON">RON</option>
                        </FormControl>

                        <ControlLabel>Enter amount to convert</ControlLabel>
                        <FormControl
                            type="number"
                            min="0"
                            value={this.state.amountFrom}
                            placeholder="Enter amount to convert"
                            onChange={this.handleChangeAmount}
                        />
                    </FormGroup>
                </form>
            </div>

            <div className="summaryStyle">
            <h6>Enter in the field "Enter amount to convert" a value greater then zero</h6>
            <br/>
            <Summary currencyFrom="EUR" currencyTo={this.state.currencyTo} amountFrom={this.state.amountFrom} rate={this.state.rate} date={this.state.date}/>
            </div>
            
          </div>
        );
      }
}

export default Calculator;