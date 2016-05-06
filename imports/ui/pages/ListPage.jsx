import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// API imports
import { Employees } from '../../api/employees.js';
// Component imports
import Employee from '../components/Employee.jsx'
 
// ListPage component
class ListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
 
  renderEmployee() {
    return this.props.employees.map((data) => (
      <Employee key={data._id} data={data} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <div id="search-bar" className="input-field">
          <input id="search" type="search"/>
          <label for="search"><i className="material-icons">search</i></label>
        </div>
        <div className="row">
          <p className="col-md-2"> {this.props.employeeCount} Employees</p>
          <a href="/new" className="col-md-2">+</a> 
        </div>
        <ul className="collection">
          {this.renderEmployee()}
        </ul>
      </div>
    );
  }
}

ListPage.propTypes = {
  employees: PropTypes.array.isRequired,
  employeeCount: PropTypes.number.isRequired,
};
 
export default createContainer(() => {
  return {
    employees: Employees.find({}).fetch(),
    employeeCount: Employees.find({}).count(),
  };
}, ListPage);