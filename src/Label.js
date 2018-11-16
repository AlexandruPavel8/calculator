import React, { Component } from 'react';

class Label extends Component {
  render() {
      var labelStyle=
      {
          fontSize: this.props.fontSize,
          fontFamily: this.props.fontFamily,
          fontWeight: this.props.fontWeight,
          textAlign: this.props.textAlign,
          color: this.props.color,
          float: this.props.float  
      }
    return (
      <div>
         <label style={labelStyle}>{this.props.labelText}</label>
      </div>
    );
  }
}

export default Label;
