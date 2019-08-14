import React, { Component } from "react";
import "./Main.css";
import CustomInput from "../components/CustomInput/CustomInput";

class Main extends Component {
  state = {
    todos: [],
    title: "",
    description: ""
  };

  onFormSubmit = e => {
    e.preventDefault();

    const { title, description, todos } = this.state;

    const todoObj = { title, description };

    todos.push(todoObj);
    this.setState(todos);
  };

  render() {
    console.log(this.state.todos);

    return (
      <React.Fragment>
        <h1 className="ui segment header">Todo Application</h1>
        <div className="ui container">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <CustomInput
                type="text"
                placeholder="Enter Todo title"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
              />
            </div>
            <div className="field">
              <CustomInput
                type="text"
                placeholder="Enter Todo description"
                value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })}
              />
            </div>
            <div className="field">
              <CustomInput type="submit" className="ui button primary" />
            </div>
          </form>
          <hr />

          <div className="ui segment">
            <ul className="ui list bulleted">
              {this.state.todos.map((value, index) => (
                <li key={index}>
                  <label>Title</label>
                  {value.title}
                  <label>Description</label>
                  {value.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
