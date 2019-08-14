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
        <div className="Main-header">Todo Application</div>
        <form className="Main-form" onSubmit={this.onFormSubmit}>
          <CustomInput
            type="text"
            placeholder="Enter Todo title"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <CustomInput
            type="text"
            placeholder="Enter Todo description"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
          />
          <CustomInput type="submit" />
        </form>

        <ul>
          {this.state.todos.map((value, index) => (
            <li key={index} className>
              <h2>Title</h2>
              {value.title}
              <h2>Title</h2>
              {value.description}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Main;
