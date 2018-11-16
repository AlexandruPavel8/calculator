import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
class App extends Component {
  render() {
    return (
      <div id="AppDiv">
         <Header leftLabel="React Learning Made Easy" rightLabel="Alexandru Pavel" backgroundColorJumbotron="#a8c6f4" />
         <Main />
      </div>
    );
  }
}

export default App;
