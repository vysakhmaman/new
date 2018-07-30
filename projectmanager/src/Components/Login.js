import React from "react";
import '../index.css';
class Popup4 extends React.Component {
    render() {
      return (
         
        <div className='popup'>
          <div className='popup_inner'>
            <h3 style={{paddingTop:'10px'}}>This Application Will Take Your Data From Social Media </h3>
            <button class='acc' onClick={this.props.closePopup}>Accept</button>
          <button class='dcc' onClick={this.props.closePopup}>Decline</button>
          </div>
        </div>
        
      );
    }
  }
  
    class Login extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: false,
       
      };
    }
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
   
    render() {
      return (
        <div className='app'>
          
          <button onClick={this.togglePopup.bind(this)}>Login</button>
          
          
         
          {this.state.showPopup ? 
            <Popup4
              text='Close Me'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
          
        </div>
      );
    }
  };
  
  export default Login;

