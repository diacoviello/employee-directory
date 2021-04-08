import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import API from "../../utils/API";

class EmployeeTable extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
    API.getRandomEmployee()
      .then(res => {
        this.setState({ employees: res.data.results });
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
                <Card><img src={employee.picture.medium} style={{width: "60px", height: "60px", display: "inline", float: "left"}}></img> 
                <p style={{display: "inline"}}>{employee.name.title} {employee.name.first} {employee.name.last}</p></Card>
            )
        })};
      </div>);
  };
}

export default EmployeeTable;