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
          <Label labelText={leftLabel} fontWeight="bold" textAlign="left" float="left" />
          <Label labelText={rightLabel} fontWeight="bold" textAlign="right" float="right"/>
        </Jumbotron>
      </div>
    );
  }


export default Header;
