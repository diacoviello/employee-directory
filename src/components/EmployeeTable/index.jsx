import React, { Component } from "react";
import API from "../../utils/API";

class EmployeeTable extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
    API.getRandomEmployee()
      .then(res => {
        this.setState({employees: res.data});
      })
      .catch(err => console.log(err));
  };


  render(){
      console.log(this.state.employees);
    return(
      <div className="container">
        <div className="jumbotron discoverjumbo"><h1 className="text-center">Employee Directory</h1></div>
        {this.state.employees.map((employee) => {
            console.log(employee);
            return(
                // {/* <p key={employee.login.uuid}>{employee}</p> */}
                <div>{employee.title}</div>
            )
        })};
      </div>);
  };
}

export default EmployeeTable;