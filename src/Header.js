import React from "react";
import {Jumbotron} from 'react-bootstrap';
import Label from './Label';

const Header = ({backgroundColorJumbotron, leftLabel, rightLabel}) =>
  {
    
    const jumbotronStyle = {
      backgroundColor: backgroundColorJumbotron
    }

    return (
      <div id="HeaderDiv">
        <Jumbotron style={jumbotronStyle}>
        <Label 
          labelText={leftLabel} 
          fontSize = {25} 
          fontFamily="Times New Roman" 
          fontWeight="bold" 
          color="black" 
          textAlign="left" 
          float="left"
          />
        <Label 
          labelText={rightLabel} 
          fontSize = {25} 
          fontFamily="Times New Roman" 
          fontWeight="bold" 
          color="black" 
          textAlign="right" 
          float="right"
          />
        </Jumbotron>
        ;
      </div>
    );
  }


export default Header;
