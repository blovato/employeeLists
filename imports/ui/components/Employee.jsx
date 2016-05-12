import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';


import { Employees } from '../../api/employees.js';
 
// App component - represents the whole app
export default class Employee extends Component {

  render() {
    const data = this.props.data;
    return (
      <li className='collection-item'>
        <span className="title"><strong>{this.props.data.name}</strong></span>
        <a className="secondary-content" href={'/edit/'+data._id+'/'+data.name+'/'+data.email+'/'+data.position}>
          <i className="material-icons">edit</i>
        </a>
        <p>{this.props.data.position}</p>
        <p>{this.props.data.email}</p>
      </li>
    );
  }
}
