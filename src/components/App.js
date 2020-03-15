import React, { Component, isValidElement } from "react";
import Table from "./Data/Table";
import AddWorker from './Actions/AddWorker';

class App extends React.Component {
  render() {
    let data = [
      {
        name: "Mykola",
        job: "programmer"
      },
      {
        name: "Ivan",
        job: "engineer"
      }
    ];
    return (
      <div className="App">
        <header className="App-adding-form">
          <AddWorker data={data} />
        </header>
        <div className="App-content">
          <Table data={data} />
        </div>
      </div>
    );
  }
}
export default App;
