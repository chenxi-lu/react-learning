/*
 * @Author: chenxi_lu 
 * @Date: 2021-12-28 17:53:50 
 * @Last Modified by:   chenxi_lu &lt;cx_lu@trip.com&gt; 
 * @Last Modified time: 2021-12-28 17:53:50 
 */

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

module.exports = {
  tryConvert,
  toCelsius,
  toFahrenheit
}