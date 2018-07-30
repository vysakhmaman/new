import React, { Component } from 'react';
import '../index.css';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import  './react-bootstrap-table.css';

 

      
class Projecte extends Component {
    
  render() {
    return (
      <div >
         <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id'>
            UserId
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='dp'>
          Department
          </TableHeaderColumn>
          <TableHeaderColumn dataField='ph'>
          Phone
          </TableHeaderColumn>
          <TableHeaderColumn dataField='eid'>
          Email
          </TableHeaderColumn>
          <TableHeaderColumn dataField='password'>
          Password 
          </TableHeaderColumn>
          <TableHeaderColumn dataField='actions'>
          Action
          </TableHeaderColumn>
        </BootstrapTable>
       
       
 
      </div>
    );
  }
}
 
export default Projecte;