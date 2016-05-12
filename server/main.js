import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/api/employees.js';

Meteor.startup(() => {
  Meteor.publish('employees', () => {
  	return Employees.find();
  });
});
