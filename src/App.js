/*
 * @Author: chenxi_lu 
 * @Date: 2021-12-28 17:58:21 
 * @Last Modified by:   chenxi_lu &lt;cx_lu@trip.com&gt; 
 * @Last Modified time: 2021-12-28 17:58:21 
 */

import React from 'react';
import './App.css';
import Calculator from './component/calculator'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: 'try input something' };
  }
  render () {
    return <div className="App">
      <Calculator/>
    </div>
    
  }
}


export default App;
