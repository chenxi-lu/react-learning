/*
 * @Author: chenxi_lu 
 * @Date: 2021-12-28 17:50:34 
 * @Last Modified by: chenxi_lu <cx_lu@trip.com>
 * @Last Modified time: 2021-12-30 16:07:35
 */

import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
}  

class TemperatureInput extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  handleChange = e => {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const { temperature, scale}  = this.props
    return (
      <fieldset>
        <legend>Enter temperature in { scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange}/>
      </fieldset>
    )
  }
}

export default TemperatureInput