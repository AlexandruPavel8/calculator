import React from 'react';
import PropTypes from "prop-types";

const Label = ({labelText, fontSize, fontFamily, fontWeight, textAlign, color, float}) =>{
    
    var labelStyle=
        {
        fontSize: fontSize,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        textAlign: textAlign,
        color: color,
        float: float  
        }
    
    return (
      <div>
         <label style={labelStyle}>{labelText}</label>
      </div>
    );
  }

Label.propTypes=
{
    labelText: PropTypes.string.isRequired,
    fontSize:  PropTypes.number,
    fontFamily: PropTypes.string,
    labelText: PropTypes.string,
    fontWeight: PropTypes.string,
    color: PropTypes.string,
    textAlign: PropTypes.string,
    float: PropTypes.string

}
Label.defaultProps =
{
      labelText:"One forgot to set the Label here ! Please Add a Label-Text!",  
      fontSize:25,
      fontFamily:"Times New Roman",
      fontWeight:"normal",
      color:"black",
      textAlign:"left" ,
      float:"left"
};
  
export default Label;

