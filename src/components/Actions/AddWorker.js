import React, { useState } from "react";

class AddWorker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    this.state = {
      name: this.state.name,
      job: this.state.job
    };
    console.log(
      "Отправленное имя: " + this.state.name,
      " и Работа: ",
      this.state.job
    );
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add new Worker</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Job:
          <input
            type="text"
            name="job"
            value={this.state.job}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddWorker;
