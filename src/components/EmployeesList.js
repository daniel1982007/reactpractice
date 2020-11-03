import React from 'react';

class EmployeesList extends React.Component {
  constructor(props) {
    super(props);//props are from parents
    this.state = {
      employees: this.props.employees
    }
    this.handleChange = this.handleChange.bind(this)
    
  }

  handleChange(e) {
    //return new employees
    const input = e.target
    const arr = this.props.employees.filter(item => item.name.toUpperCase().includes(input.value.toUpperCase()))
    
    if(!e.target.value) {
      this.setState({employees: this.props.employees})
    }
    else {
      this.setState({employees: arr})
    }
  }

  render() {
    //const { employees } = this.state.employees;
    //useState: 
    //setState
    //input onChange={}, filter() get a result array, and set this result array to state
    //when state changed, return new list. JSX refresh with new state object.
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" onChange={this.handleChange} />
        </div>
        <ul className="employees-list">
          { this.state.employees.map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
