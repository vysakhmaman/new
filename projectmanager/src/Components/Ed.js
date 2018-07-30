import React, { Component } from 'react';
import '../index.css';
import Projecte from './Projecte';



 const data = [
  {id: 'EMP103', name: 'Christina',dp:'Analysts',ph:'9878734',eid:'@gmail.com',password:'....',actions:'delete'},
  {id: 'EMP1014 ', name: 'babitto',dp:'Analysts',ph:'987873456',eid:'babitto@gmail.com',password:'.....',actions:'delete'},
  
];
class Ed extends Component {
    render() {
      return (
        <div className="Ed">
          <div class='xyz' style={{width:'100%',height:'20%',backgroundPositionY:'top',backgroundColor:'rgb(0,0,0)'
  
  
  
  }}>
          <h5 style={{color:'white',paddingTop:'35px'}}>INTELLI LOANS</h5>
          
          <h6 style={{color:'white',marginLeft:'1200px',top:'0px'}}>welcome,</h6>
          </div>
          <div class='ed'>
          
          
          <button class="bttn"onClick={this.props.handleClick}>+Add</button>
        <i class="fa fa-home" style={{paddingLeft:'1200px',fontSize:'50px'}}aria-hidden="true"></i>
          

           

         </div>
         <br/> 
           <br/>
           <br/>
           <br/>
           <div class="table">
         <h5 >Employee Details</h5>
         <Projecte data={data}/></div>
          </div>
      







          
      );
    }
  }
  
  export default Ed;
  