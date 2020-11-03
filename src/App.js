import React, { Component } from 'react';
import './App.css';

import EmployeesList from './components/EmployeesList';

class App extends Component {
  render() {
    const { employees } = this.props;//because of App has only one prop, so here you don't need with this.props.employees
    return (
      <div className="App">
        <EmployeesList employees={employees} />
      </div>
    );
  }
}

export default App;
