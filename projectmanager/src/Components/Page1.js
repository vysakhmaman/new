import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Page1 extends Component {

  handleSubmit(){
    this.props.history.push({
      pathname:'/page2',
    });
  }

  render(){
    return(
      <div>
      <p> Page 1 </p>
      <div onClick={this.handleSubmit.bind(this)}> NEXT </div>
      </div>
    );
  }
}

export default withRouter(Page1);
