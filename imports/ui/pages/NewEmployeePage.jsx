import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

// API imports
import { Employees } from '../../api/employees.js';
 
// ListPage component
class NewEmployee extends Component {

  insertEmployee(e) {
    e.preventDefault();

    var name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    var position = ReactDOM.findDOMNode(this.refs.position).value.trim();
    var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    this.props.insertEmployee(name, email, position);

    window.location.pathname = '/list';
  }


  render() {
    return (
      <div>
        <h3 className="container">New Employee</h3>
        <div className="container">
          <div className="card">
            <div className="row">
              <form style={{padding: '20px 30px 0px 30px'}}>
                <div className="row">
                  <div className="input-field col s12">
                    <input required ref="name" type="text" className="validate"/>
                    <label for="name">Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input required ref="email" type="email" className="validate"/>
                    <label for="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input required ref="position" type="text" className="validate"/>
                    <label for="position">Position</label>
                  </div>
                </div>
                <div className="row">
                  <a href='#' className="btn teal" 
                     style={{marginLeft: '11px'}}
                     onClick={this.insertEmployee.bind(this)}>
                    Save
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

NewEmployee.propTypes = {
  insertEmployee: PropTypes.func.isRequired,
};
 
export default createContainer(() => {
  Meteor.subscribe('employees');
  return {
    insertEmployee: (name, email, position) => {
      Employees.insert({
        name,
        email,
        position,
      });
    }
  };
}, NewEmployee);