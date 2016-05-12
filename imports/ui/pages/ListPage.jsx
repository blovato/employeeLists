import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { createContainer } from 'meteor/react-meteor-data';

// API imports
import { Employees } from '../../api/employees.js';
// Component imports
import Employee from '../components/Employee.jsx';

 
// ListPage component
class ListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  handleChange() {
    this.setState({searchValue: this.refs.search.value}, () => {
      console.log(this.state.searchValue);
    });
  }

  goToPage(endpoint) {
    window.location.pathname = endpoint;
  }
 
  renderEmployee() {
    let filteredNames = this.props.employees.filter((data) => {
      return data.name.startsWith(this.state.searchValue);
    });
    return filteredNames.map((data) => (
      <Employee key={data._id} data={data} />
    ));
  }

  render() {
    $('.tooltipped').tooltip();
    return (
      <div className="container">
        <div id="search-bar" className="input-field">
          <input ref="search" type="search" onChange={this.handleChange.bind(this)}/>
          <label for="search">
            <i className="material-icons">search</i>
          </label>
        </div>
        <a href="#" id="fabEmployeeCount"
           className="btn btn-floating grey lighten-1 tooltipped" 
           data-position="bottom" data-delay="50" 
           data-tooltip={this.props.employeeCount +" Employees"}> 
             
          {this.props.employeeCount}
        </a>
        <ul className="collection">
          <ReactCSSTransitionGroup transitionName="employeeItem" 
              transitionAppear={true}
              transitionAppearTimeout={400}
              transitionEnterTimeout={400}
              transitionLeaveTimeout={400}>
            <li className="collection-item-btn" onClick={this.goToPage.bind(this, '/new')}>
              <p className="center-align">+ employee </p>
            </li>

            {this.renderEmployee()}
          </ReactCSSTransitionGroup>
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
  Meteor.subscribe('employees');
  return {
    employees: Employees.find({}, {sort: { name: 1 }}).fetch(),
    employeeCount: Employees.find({}).count(),
  };
}, ListPage);