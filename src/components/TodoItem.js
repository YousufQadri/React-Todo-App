import React from "react";
import CustomInput from "./CustomInput";

const onCheckStyle = () => {
  return {
    // textDecoration: this.props.isComplete ? "line-through" : ""
  };
};

const TodoItem = props => {
  const { id, title, description } = props.todo;
  return (
    <div className="item">
      <div className="content">
        <div class="ui left floated segment">
          <div class="ui fitted checkbox">
            <input type="checkbox" onChange="" />
            <label />
          </div>
        </div>
        <div style={onCheckStyle()}>
          <h3 className="">{title}</h3>
          <div className="description">{description}</div>
        </div>
        <span style={{ float: "right" }}>
          <CustomInput
            type="button"
            value="Edit"
            className="ui button positive right"
            onClick=""
          />
          <CustomInput
            type="button"
            value="Delete"
            className="ui button negative right"
            onClick={() => props.delTodo(id)}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
