import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Form from './components/Form';
import Footer from "./components/Footer";
import EmployeeTable from './components/EmployeeTable';

function App() {
  return (
    <div>
      <Form>

      </Form>
      <EmployeeTable>

      </EmployeeTable>
      <Footer />
    </div>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
