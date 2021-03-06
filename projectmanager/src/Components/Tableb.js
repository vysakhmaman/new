import React, { Component } from 'react';
import '../index.css';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import { withRouter } from 'react-router-dom';
import  './react-bootstrap-table.css';


 
class ActionFormatter extends React.Component {
  
  render() {
    return (
      <button  class='bttn2' onClick={this.handleSubmit.bind(this)}>View</button>
    );
  }
}

function actionFormatter(cell, row) {

  
  return (
    <ActionFormatter />
  );
}
      
class Tableb extends Component {
  handleSubmit(){
    this.props.history.push({
      pathname:'/Cd',
    });
  }

  render() {
    return (
      <div >
         <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='type'>
            Type
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='dp'>
          Credit Score
          </TableHeaderColumn>
          <TableHeaderColumn dataField='ph'>
          Company
          </TableHeaderColumn>
          <TableHeaderColumn dataField='eid'>
          designation
          </TableHeaderColumn>
          
          <TableHeaderColumn dataField='action' dataFormat={ actionFormatter }>More info</TableHeaderColumn>
         </BootstrapTable>
       
       
 
      </div>
    );
  }
}
export default withRouter(Tableb);