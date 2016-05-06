import { Employees } from './employees.js';

if(Employees.find({}).count() < 5){
  Employees.insert({name: "Brenten"});
  Employees.insert({name: "John"});
}
