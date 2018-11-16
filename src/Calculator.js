import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import Label from './Label';
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
                
                <Label 
                    labelText="Enter here the data for the conversion:" 
                    fontSize = {20} 
                    fontFamily="Times New Roman" 
                    color="black" 
                    textAlign="left" 
                    float="left"
                />
                
                <br/><br/>

                <form >
                <FormGroup controlId="exchangeFormGroup">
                        <Label 
                            labelText="Convert From Currency:" 
                            fontSize = {15} 
                            fontFamily="Times New Roman" 
                            color="black" 
                            textAlign="left" 
                            float="left"
                        />
                        <FormControl 
                            componentClass="select" 
                            placeholder="select" 
                            readOnly>
                                <option value="EUR">EUR</option>
                        </FormControl>
                        
                        <Label 
                            labelText="Convert To Currency:" 
                            fontSize = {15} 
                            fontFamily="Times New Roman" 
                            color="black" 
                            textAlign="left" 
                            float="left"
                        />
                        <FormControl 
                            componentClass="select" 
                            placeholder="select" 
                            onChange={this.handleChangeCurrencyTo}>
                                <option value="USD">USD</option>
                                <option value="RON">RON</option>
                        </FormControl>

                        <Label 
                            labelText="Enter amount to convert" 
                            fontSize = {15} 
                            fontFamily="Times New Roman" 
                            fontWeight="bold" 
                            color="black" 
                            textAlign="left" 
                            float="left"
                        />
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
            <Label 
                labelText="Enter in the field Enter amount to convert a value greater then zero" 
                fontSize = {20} 
                fontFamily="Times New Roman" 
                color="black" 
                textAlign="left" 
                float="left"
            />
            <br/>
            <Summary 
                currencyFrom="EUR" 
                currencyTo={this.state.currencyTo} 
                amountFrom={this.state.amountFrom} 
                rate={this.state.rate} 
                date={this.state.date}
            />
            </div>
            
          </div>
        );
      }
}

export default Calculator;