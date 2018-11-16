import React, { Component } from "react";
import {Jumbotron} from 'react-bootstrap';
import Label from './Label';

class Header extends Component {
  render() {
    
    const jumbotronStyle = {
      backgroundColor: this.props.backgroundColorJumbotron
    }

    return (
      <div id="HeaderDiv">
        <Jumbotron style={jumbotronStyle}>
        <Label labelText={this.props.leftLabel} fontSize = {25} fontFamily="Times New Roman" fontWeight="bold" color="black" textAlign="left" float="left"/>
        <Label labelText={this.props.rightLabel} fontSize = {25} fontFamily="Times New Roman" fontWeight="bold" color="black" textAlign="right" float="right"/>
        </Jumbotron>
        ;
      </div>
    );
  }
}

export default Header;
