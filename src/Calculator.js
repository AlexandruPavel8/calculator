import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
          exchangeFrom: '',
          exchangeTo: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({exchangeFrom: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A currency was submitted: ' + this.state.exchangeFrom);
        alert('A currency was submitted: ' + this.state.exchangeTo);
        event.preventDefault();
      }
    
      render() {
        return (           
          <div>
          <h2>The conversion {this.props.convert} will be made on the rate from {this.props.date.toDateString()} with rate: {this.props.rate} </h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Exchange Currency From:
              <select name="exchangeFrom" value={this.state.exchangeFrom} onChange={this.handleChange} >
                <option value="USD" selected="selected">USD</option>
                <option value="EUR">EUR</option>
                <option value="RON">RON</option>
            </select>
            </label>
            <br></br>
            <label>
              Exchange Currency To:
              <select name="exchangeTo" value={this.state.exchangeTo} onChange={this.handleChange} >
                <option value="USD">USD</option>
                <option value="EUR" selected="selected">EUR</option>
                <option value="RON">RON</option>
            </select>
            </label>
            <br></br>
            <input type="submit" value="Convert" />
          </form>
          </div>
        );
      }
}

export default Calculator;