import React, { Component } from "react";
import API from "../../utils/API";

class EmployeeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.handleClickName = this.handleClickName.bind(this);
    this.handleClickEmail = this.handleClickEmail.bind(this);
  }

  componentDidMount() {
    API.getRandomEmployee()
      .then((res) => {
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  handleClickName() {
    let sortedEmployees = this.state.employees;

    sortedEmployees.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    });
    this.setState({ employees: sortedEmployees });
  }

  handleClickEmail() {
    let sortedEmployees = this.state.employees;

    sortedEmployees.sort((a, b) => {
      if (a.email < b.email) {
        return -1;
      }
      if (a.email > b.email) {
        return 1;
      }
      return 0;
    });
    this.setState({ employees: sortedEmployees });
  }

  render() {
    console.log(this.state.employees);

    return (
      <div className="container">
        <div className="jumbotron discoverjumbo">
          <h1 className="text-center">Employee Directory</h1>
        </div>

        <table style={{ width: "100%" }}>
          <tr>
            <th></th>
            <th onClick={this.handleClickName}>
              <button>Name</button>
            </th>
            <th onClick={this.handleClickEmail}>
              <button>Email</button>
            </th>
            <th>Phone</th>
          </tr>

          {this.state.employees.map((employee) => {
            console.log(employee);
            return (
              // {/* <p key={employee.login.uuid}>{employee}</p> */}
              <tbody>
                <tr>
                  <td>
                    <img
                      src={employee.picture.medium}
                      style={{
                        width: "60px",
                        height: "60px",
                        display: "inline",
                        float: "left",
                      }}
                    ></img>
                  </td>

                  <td>
                    <strong>
                      {employee.name.title} {employee.name.first}{" "}
                      {employee.name.last}
                    </strong>
                  </td>
                  <td>
                    <strong>{employee.email}</strong>
                  </td>
                  <td>
                    <strong>{employee.phone}</strong>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default EmployeeTable;
