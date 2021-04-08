import React, { Component } from "react";
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

            <table style={{width: "100%"}}>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            
        {this.state.employees.map((employee) => {
            console.log(employee);
            return (
              // {/* <p key={employee.login.uuid}>{employee}</p> */}
              <tbody>
                <tr>
                  <td><img
                    src={employee.picture.medium}
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "inline",
                      float: "left",
                    }}
                  ></img></td>

                      <td><strong>
                        {employee.name.title} {employee.name.first}{" "}
                        {employee.name.last}
                      </strong></td>
                      <td><strong>{employee.email}</strong></td>
                      <td><strong>{employee.phone}</strong></td>

                </tr>
              </tbody>
            );
        })}
        </table>
      </div>)
  };
}

export default EmployeeTable;