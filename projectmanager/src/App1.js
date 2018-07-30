import React, { Component } from 'react';
import './index.css';
import Project from './Components/Project';

import Projectd from './Components/Projectd';

class App1 extends Component {
  render() {
    return (
      <div className="App1" >
      <Project/>
      <Projectd/>
      </div> 
    );
  }
}


export default App1;
