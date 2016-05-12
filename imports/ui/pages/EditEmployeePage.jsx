import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

// API imports
import { Employees } from '../../api/employees.js';
 
// ListPage component
class EditEmployee extends Component {

  updateEmployee(e) {
    e.preventDefault();

    var name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    var position = ReactDOM.findDOMNode(this.refs.position).value.trim();
    var email = ReactDOM.findDOMNode(this.refs.email).value.trim();

    this.props.updateEmployee(this.props.params._id, name, email, position);
    window.location.pathname = '/list';
  }

  deleteEmployee() {
    this.props.deleteEmployee(this.props.params._id);
    window.location.pathname = '/list';
  }

  render() {
    return (
      <div>
        <h3 className="container">Edit Employee</h3>
        <div className="container">
          <div className="card" style={{overflow: 'hidden'}}>
            
            <form style={{padding: '20px 30px 0px 30px'}}>
              <div className="row">
                <div className="input-field col s12">
                  <input required ref="name" type="text" defaultValue={this.props.params.name} className="validate" />
                  <label className="active" for="name">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input required ref="email" type="email" defaultValue={this.props.params.email} className="validate" />
                  <label className="active" for="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input required ref="position" type="text" defaultValue={this.props.params.position} className="validate" />
                  <label className="active" for="position">Position</label>
                </div>
              </div>
            </form>
            
            <div className="card-action">
              <a href="#" onClick={this.updateEmployee.bind(this)} className="waves-effect waves-green btn-flat">
                Save
              </a>
              <a href="#" onClick={this.deleteEmployee.bind(this)} className="waves-effect btn-flat red">
                Delete
              </a>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

EditEmployee.propTypes = {
  dataIsReady: PropTypes.bool.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
  updateEmployee: PropTypes.func.isRequired,
};
 
export default createContainer(({params}) => {
  const dataHandle = Meteor.subscribe('employees');
  const dataIsReady = dataHandle.ready();
  return {
    dataIsReady,
    deleteEmployee: (_id) => {
      Employees.remove(_id);
    },
    updateEmployee: (_id, name, email, position) => {
      Employees.update(_id, {
        name,
        email,
        position,
      });
    }
  };
}, EditEmployee);

