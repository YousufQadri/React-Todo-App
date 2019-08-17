import React, { Component } from "react";
import "./Main.css";
import uuid from "uuid";
import Swal from "sweetalert2";
import Todos from "../components/Todos";
import Header from "./Header";
import TodoForm from "../components/TodoForm";

class Main extends Component {
  state = {
    todos: [],
    title: "",
    description: ""
  };

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      id: uuid.v4(),
      title: this.state.title,
      description: this.state.description,
      isComplete: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      title: "",
      description: "",
      isUpdate: false
    });
  };

  // updateTodo = e => {
  //   e.preventDefault();
  //   const { updateTododID, title, description, todos } = this.state;
  //   const selectedTodo = this.state.todos.find(
  //     todo => todo.id === updateTododID
  //   );
  //   const updatedTodoItem = {
  //     id: selectedTodo.id,
  //     title,
  //     description,
  //     isComplete: false
  //   };
  //   this.setState({ todos: [...todos, updatedTodoItem], isUpdate: false });
  // };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          if (todo.id !== id) return todo;
        })
      ]
    });
  };

  changeStatus = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      })
    });
  };

  editTodo = id => {
    const filteredTodo = this.state.todos.filter(todo => todo.id !== id);
    const selectedTodo = this.state.todos.find(todo => todo.id === id);

    this.setState({
      todos: filteredTodo,
      title: selectedTodo.title,
      description: selectedTodo.description,
      isUpdate: true
    });
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { title, description, isUpdate } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="ui container">
          <TodoForm
            title={title}
            description={description}
            addTodo={this.addTodo}
            updateTodo={this.updateTodo}
            onInputChange={this.onInputChange}
            isUpdate={isUpdate}
          />

          <Todos
            todos={this.state.todos}
            editTodo={this.editTodo}
            delTodo={this.delTodo}
            changeStatus={this.changeStatus}
          />

          <div className="ui horizontal divider header">
            <i className="calendar alternate icon" />
            Todos
          </div>
          <span>Completed: </span>
          <span>Remaining: </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
