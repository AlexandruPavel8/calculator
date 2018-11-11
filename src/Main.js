import React, { Component } from 'react';
import Calculator from './Calculator';

class Main extends Component {      
  render() { 
    return (      
      <div id="MainDiv">
        <Calculator conversionFromTo="EUR->USD" date={new Date()} rate={0.87618} />
      </div>
    );
  }
}

export default Main;