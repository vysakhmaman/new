import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Popup from 'react-popup';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <BrowserRouter
   basename={window.location.pathname}>
  <App />
</BrowserRouter>,
  document.getElementById('root')
);
