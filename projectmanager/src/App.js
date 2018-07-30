import React, { Component } from 'react';
import './index.css';
import { Switch, Route } from 'react-router-dom';
//import Project from './Components/Project';
//import Projecta from './Components/Projecta';
//import Projectc from './Components/Projectc';

import Pop from './Components/Pop';
import Cd from './Components/Cd';
import Login from './Components/Login';
class App extends Component {
  render() {
    return (
    
      <Switch>
       
      <Login/>
    
    </Switch>
    );
  }
}


export default App;
