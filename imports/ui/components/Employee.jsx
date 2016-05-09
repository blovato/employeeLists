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
        <a className="secondary-content" href="#" onClick={this.deleteEmployee.bind(this)}>
          <i className="material-icons">not_interested</i>
        </a>
        <p>{this.props.data.email}</p>
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