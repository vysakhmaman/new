import React, { Component } from 'react';
import '../index.css';
import Tableb from './Tableb';
import Tablea from './Tablea';
import Tablec from './Tablec';
import Exp2 from './Exp2';
import Exp from './Exp';
import Exp1 from './Exp1';
import { withRouter } from 'react-router-dom';




const data = [
  {type: 'Business', name: 'Christina',dp:'Analysts',ph:'9878734',eid:'chris@gmail.com',password:'....'},
  {type: 'Business', name: 'babitto',dp:'Analysts',ph:'987873456',eid:'babitto@gmail.com',password:'.....'},
  
];
const data1 = [
  {type: 'Moderate', name: 'Christina',dp:'Analysts',ph:'9878734',eid:'chris@gmail.com',password:'....'},
  {type: 'Moderate', name: 'babitto',dp:'Analysts',ph:'987873456',eid:'babitto@gmail.com',password:'.....'},
  
];
const data2 = [
  {type: 'Working', name: 'Christina',dp:'Analysts',ph:'9878734',eid:'chris@gmail.com',password:'....'},
  {type: 'Working', name: 'babitto',dp:'Analysts',ph:'987873456',eid:'babitto@gmail.com',password:'.....'},
  
];

class Hello extends Component {
  render() {
    return <div>
      <Link />
     
      
    </div>;
  }
}
class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        <div className='ed'style={{paddingTop:'15px'}}>
        <h5>Business</h5>
        <pre>                                                        </pre>
       <Exp/>
        
        </div>
        <br/> <br/> <br/>
        <Tableb data={data}/>
        <br/>
        <button onClick={this.props.closePopup}  style={{marginLeft:'518px',marginTop:'20px'}}>close</button>
        </div>
      </div>
    );
  }
}
class Popup1 extends React.Component {
  render() {
    return (
       
      <div className='popup1'>
        <div className='popup_inner1'>
        <div className='ed'style={{paddingTop:'15px'}}>
        <h5>Moderate</h5>
        <pre>                                                        </pre>
        <Exp1/>
        </div>
        <br/> <br/> <br/>
        <Tablea data={data1}/>
        <br/>
        <button  onClick={this.props.closePopup1} style={{marginLeft:'518px',marginTop:'20px'}}>close</button>
        </div>
      </div>
      
    );
  }
}
class Popup2 extends React.Component {
  render() {
    return (
       
      <div className='popup2'>
        <div className='popup_inner2'>
        <div className='ed' style={{paddingTop:'15px'}}>
        <h5>Working Class</h5>
        <pre>                                                        </pre>
        <Exp2/>
        </div>
        <br/> <br/> <br/>
        <Tablec data={data2}/>
        <br/>
        <button  onClick={this.props.closePopup2} style={{marginLeft:'518px',marginTop:'20px'}}>close</button>
        </div>
      </div>
      
    );
  }
}

class Popa extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      showPopup2: false,
       showPopup3: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  togglePopup1() {
    this.setState({
      showPopup1: !this.state.showPopup1
    });
  }
  togglePopup2() {
    this.setState({
      showPopup2: !this.state.showPopup2
    });
  }
  render() {
    return (
      <div className='app'>
        
        <button onClick={this.togglePopup.bind(this)}>Business Class</button>
        <button onClick={this.togglePopup1.bind(this)}>Moderate Class</button>
        <button onClick={this.togglePopup2.bind(this)}>Working Class</button>
        
        
       
        {this.state.showPopup ? 
          <Popup
            text='Close'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        {this.state.showPopup1 ? 
            <Popup1
              text='Close'
              closePopup1={this.togglePopup1.bind(this)}
            />
            : null
          }
          {this.state.showPopup2 ? 
            <Popup2
              text='Close'
              closePopup2={this.togglePopup2.bind(this)}
            />
            : null
          }
      </div>
    );
  }
};

class Link extends Component {
	state = {
  	open: false
  }
  handleClick = () => {
  	this.setState({ open: !this.state.open });
  }
  render () {
  	const { open } = this.state;
  	return (
    	<div className="link">
    	  < button class='bttn1' onClick={this.handleClick}>Search</ button>
        <div className={`menu ${open ? 'open' : ''}`}>
          <ul>
            <li> <Popa/> </li>
            
          </ul>
        </div>
    	</div>
    )
  }
}
export default withRouter(Hello);
