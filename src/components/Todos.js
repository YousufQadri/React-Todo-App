import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="ui horizontal divider header">
          <i className="tag icon" />
          Todo Items
        </div>
        <div className="ui segment">
          <ul className="ui relaxed divided list">
            {this.props.todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                changeStatus={this.props.changeStatus}
                editTodo={this.props.editTodo}
                delTodo={this.props.delTodo}
                isUpdate={this.props.isUpdate}
              />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Todos;
