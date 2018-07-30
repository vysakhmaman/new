import React, { Component } from 'react';
import '../index.css';
import { withRouter } from 'react-router-dom';
import img from '../img/1.jpg';
class Cd extends Component {
    render() {
      return (
        <div className="Cd">
          <div class='xyz' style={{width:'100%',height:'20%',backgroundPositionY:'top',backgroundColor:'rgb(0,0,0)'
  
  
  
  }}>
          <h2 style={{color:'white',paddingTop:'35px'}}>INTELLI LOANS</h2>
          
          <h4 style={{color:'white',marginLeft:'1200px',top:'0px'}}>welcome,</h4>
          </div>
         
          <div class='xyz'>
          <h2 >CUSTOMER INFORMATION</h2>
          
        <indexlink style={{marginLeft:'400px',color:'blue',marginTop:'20px',font:'25px'}}> View As pdf<i class="fa fa-download" aria-hidden="true"></i>
 </indexlink>
        <i class="fa fa-home" style={{position:'relative',paddingleft:'5px',fontSize:'50px',marginLeft:'580px'}}aria-hidden="true"></i>
        </div> 
        <div class='img'>
         
         </div>
         <label class="det" for="Name (Full name)">Name (Full name)&nbsp;:Advitiya Sujeet</label><br/>
         <label class="det" for="Age">Age:41</label><br/>
         <label class="det" for="Permanent Address">Permanent Address:Brigade Road</label><br/> 
         <label class="det" for="Designation">Designation:CEO</label><br/>
         <label class="det" for="Education">Education:B.E</label> <br/>
         <label class="det" for="College Name">College Name:Birla Institute of Technology and Science Pilani</label> <br/> 
         <label class="det" for="Email Address">Email/Phone Number:</label><br/>  
         <label class="det" for="Company Name">Company Name:Google</label>  <br/>
         <label class="det" for="Working Experience (time period)">Working Experience:24</label><br/>  
         <label class="det" for="Category">Category:Business</label> <br/>
        
       
         
         </div>
        
                  
      );
    }
  }
  
  export default withRouter(Cd);
  