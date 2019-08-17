import React, { Component } from "react";
import CustomInput from "./CustomInput";

class TodoItem extends Component {
  onCheckStyle = () => {
    return {
      textDecoration: this.props.todo.isComplete ? "line-through" : ""
    };
  };
  render() {
    const { id, title, description } = this.props.todo;
    return (
      <div className="item">
        <div className="content">
          <div className="ui left floated segment">
            <div className="ui fitted checkbox">
              <input
                type="checkbox"
                onChange={() => this.props.changeStatus(id)}
              />
              <label />
            </div>
          </div>
          <div style={this.onCheckStyle()}>
            <h3 className="">{title}</h3>
            <div className="description">{description}</div>
          </div>
          <span style={{ float: "right" }}>
            <CustomInput
              type="button"
              value="Edit"
              className="ui button positive right"
              onClick={() => this.props.editTodo(id)}
            />
            <CustomInput
              type="button"
              value="Delete"
              className="ui button negative right"
              onClick={() => this.props.delTodo(id)}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default TodoItem;
