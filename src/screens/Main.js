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
    description: "",
    update: false,
    idToUpdate: ""
  };

  addTodo = (title, description) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      description
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      isComplete: false
    });
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          if (todo.id !== id) return todo;
        })
      ]
    });
  };
  // onFormSubmit = (title, description) => {
  //   const { todos } = this.state;

  //   if (!title && !description) {
  //     Swal.fire({
  //       type: "error",
  //       title: "Please fill both fields"
  //     });
  //   } else if (title.length <= 2 || description <= 2) {
  //     Swal.fire({
  //       type: "error",
  //       title: "Title must consist of more than 2 words"
  //     });
  //   } else {
  //     const todoObj = { title, description };
  //     todos.push(todoObj);
  //     this.setState({ todos, title: "", description: "" });
  //     Swal.fire({
  //       title: "Successfully added!",
  //       text: "Todo List updated",
  //       type: "success",
  //       showConfirmButton: false,
  //       timer: 1500
  //     });
  //   }
  // };

  // onFormUpdate = e => {
  //   e.preventDefault();
  //   const { todos, idToUpdate, title, description } = this.state;
  //   console.log(todos);
  //   todos[idToUpdate].title = title;
  //   todos[idToUpdate].description = description;
  //   this.setState({ todos, title: "", description: "", update: false });
  // };

  // onTodoDelete = index => {
  //   const { todos } = this.state;
  //   todos.splice(index, 1);
  //   this.setState({ todos });
  // };

  // onTodoEdit = (val, i) => {
  //   this.setState({
  //     title: val.title,
  //     description: val.description,
  //     update: true,
  //     idToUpdate: i
  //   });
  // };

  // onChecked = () => {
  //   this.setState({ isComplete: !this.state.isComplete });
  // };

  // onInputChangeHandler = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  render() {
    // const { title, description, update, isComplete } = this.state;
    // let taskDone = isComplete ? "line-through" : "";
    return (
      <React.Fragment>
        <Header />
        <div className="ui container">
          <TodoForm addTodo={this.addTodo} />

          <Todos todos={this.state.todos} delTodo={this.delTodo} />

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
