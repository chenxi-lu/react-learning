/*
 * @Author: chenxi_lu 
 * @Date: 2021-12-28 17:50:03 
 * @Last Modified by: chenxi_lu <cx_lu@trip.com>
 * @Last Modified time: 2021-12-30 15:53:15
 */

import React from "react"
import TemperatureInput from "../temperatureInput"
import { tryConvert, toCelsius, toFahrenheit } from "../../util/common"
import FancyBorder from "../fancyBorder"
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: "",
      scale: "c"
    }
  }

  handleCelsiusChange = temperature => {
    this.setState({
      scale: "c",
      temperature
    })
  }

  handleFahrenheitChange = temperature => {
    this.setState({
      scale: "f",
      temperature
    })
  }

  render() {
    const { temperature, scale } = this.state
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <FancyBorder color="pink">
          <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} /> 
        </FancyBorder>
        <FancyBorder color="green">
          <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        </FancyBorder>
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

export default Calculator
