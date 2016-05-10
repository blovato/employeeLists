import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Modal, Button } from 'react-materialize';


import { Employees } from '../../api/employees.js';
 
// App component - represents the whole app
class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  updateEmployee(e) {
    e.preventDefault();

    var name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    var position = ReactDOM.findDOMNode(this.refs.position).value.trim();
    var email = ReactDOM.findDOMNode(this.refs.email).value.trim();

    this.props.updateEmployee(this.props.data._id, name, email, position);
  }

  deleteEmployee() {
    this.props.deleteEmployee(this.props.data._id);
  }

  render() {

    let modalName = "modal_" + this.props.data._id;

    return (
      <li className='collection-item'>
        <span className="title"><strong>{this.props.data.name}</strong></span>

        <Modal header={"Edit "+ this.props.data.name}
          trigger={
            <a className="secondary-content" href="#"><i className="material-icons">edit</i></a>
          }>

          <form style={{padding: '20px 30px 0px 30px'}}>
            <div className="row">
              <div className="input-field col s12">
                <input required ref="name" type="text" defaultValue={this.props.data.name} className="validate"/>
                <label className="active" for="name">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input required ref="email" type="email" defaultValue={this.props.data.email} className="validate"/>
                <label className="active" for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input required ref="position" type="text" defaultValue={this.props.data.position} className="validate"/>
                <label className="active" for="position">Position</label>
              </div>
            </div>
          </form>
          
          <div className="modal-footerz right-align">
            <a href="#" 
              className="modal-action modal-close waves-effect waves-dark btn-flat">
              Close
            </a>
            <a href="#" onClick={this.updateEmployee.bind(this)}
              className="modal-action modal-close waves-effect waves-green btn-flat">
              Save
            </a>
            <a href="#" onClick={this.deleteEmployee.bind(this)} 
              className="modal-action modal-close waves-effect btn-flat red">
              Delete
            </a>
            
          </div>
        </Modal>

        <p>{this.props.data.position}</p>
        <p>{this.props.data.email}</p>
      </li>
    );
  }
}

Employee.propTypes = {
  deleteEmployee: PropTypes.func.isRequired,
  updateEmployee: PropTypes.func.isRequired,
}

export default createContainer(() => {
  return {
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
  }
}, Employee);
