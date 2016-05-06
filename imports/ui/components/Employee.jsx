import React, { Component, PropTypes } from 'react';

import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../api/employees.js';
 
// App component - represents the whole app
class Employee extends Component {
  deleteEmployee() {
    this.props.deleteEmployee(this.props.data._id);
  }

  render() {
    return (
      <li className='collection-item'>
        <span class="title">{this.props.data.name}</span>
        <p>{this.props.data.email}</p>
        <a href="#" onClick={this.deleteEmployee.bind(this)}>
          delete
        </a>
      </li>
    );
  }
}

Employee.propTypes = {
  deleteEmployee: PropTypes.func.isRequired,
}

export default createContainer(() => {
  return {
    deleteEmployee: (_id) => {
      Employees.remove(_id);
    }
  }
}, Employee);