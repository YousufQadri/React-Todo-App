import React, { Component } from "react";
import CustomInput from "./CustomInput";

class TodoForm extends Component {
  state = {
    title: "",
    description: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title, this.state.description);
    this.setState({ title: "", description: "" });
  };

  render() {
    return (
      // onSubmit={update ? onFormUpdate : onFormSubmit}
      <form className="ui form" onSubmit={this.onSubmit}>
        <div className="field">
          <CustomInput
            type="text"
            name="title"
            placeholder="Enter Todo title"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>
        <div className="field">
          <CustomInput
            type="text"
            name="description"
            placeholder="Enter Todo description"
            value={this.state.description}
            onChange={this.onChange}
          />
        </div>
        <div className="field">
          <input
            type="submit"
            className="ui button primary"
            // value={update ? "Update" : "Submit"}
            onChange={this.onChange}
          />
        </div>
      </form>
    );
  }
}

export default TodoForm;
