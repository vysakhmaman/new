import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Page2 extends Component {

  handleSubmit(){
      this.props.history.goBack();
  }

  render(){
    return(
      <div>
      <p> Page 2 </p>
      <div onClick={this.handleSubmit.bind(this)}> BACK </div>
      </div>
    );
  }
}

export default withRouter(Page2);
