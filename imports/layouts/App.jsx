import React, { Component } from 'react';
 
// App component - represents the whole app
export class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}