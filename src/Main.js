import React, { Component } from 'react';
import Calculator from './Calculator';

class Main extends Component {      
  render() { 
    return (      
      <div>
        <Calculator convert="USD->EUR" date={new Date()} rate={0.87618} />
      </div>
    );
  }
}

export default Main;