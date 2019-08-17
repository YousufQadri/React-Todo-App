import React, { Component } from "react";
import CustomInput from "./CustomInput";

class TodoForm extends Component {
  render() {
    const { title, description, addTodo, onInputChange, isUpdate } = this.props;
    return (
      <form className="ui form" onSubmit={addTodo}>
        <div className="field">
          <CustomInput
            type="text"
            name="title"
            placeholder="Enter Todo title"
            value={title}
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <CustomInput
            type="text"
            name="description"
            placeholder="Enter Todo description"
            value={description}
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <input
            type="submit"
            className="ui button primary"
            value={isUpdate ? "Update" : "Submit"}
          />
        </div>
      </form>
    );
  }
}

export default TodoForm;
