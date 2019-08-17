import React, { Component } from "react";
import "./Main.css";
import uuid from "uuid";
import Swal from "sweetalert2";
import Todos from "../components/Todos";
import Header from "./Header";
import TodoForm from "../components/TodoForm";
import "animate.css";

class Main extends Component {
  state = {
    todos: [],
    title: "",
    description: ""
  };

  //Add TODO
  addTodo = e => {
    e.preventDefault();
    const { title, description, todos } = this.state;

    if (!title || !description) {
      Swal.fire({
        type: "error",
        title: "Please fill both fields"
      });
    } else if (title.length <= 2 || description <= 2) {
      Swal.fire({
        type: "error",
        title: "Title must consist of more than 2 words"
      });
    } else {
      const newTodo = {
        id: uuid.v4(),
        title,
        description,
        isComplete: false
      };
      this.setState({
        todos: [...todos, newTodo],
        title: "",
        description: "",
        isUpdate: false
      });
      Swal.fire({
        title: "Successfully added!",
        type: "success",
        showConfirmButton: false,
        timer: 1400
      });
    }
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

  ////Delete TODO
  delTodo = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then(result => {
      if (result.value) {
        this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              if (todo.id !== id) return todo;
            })
          ]
        });
        Swal.fire({
          title: "Deleted!",
          text: "Todo has been deleted.",
          type: "success",
          showConfirmButton: false,
          timer: 1400
        });
      }
    });
  };

  //Change TODO complete status
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

  //Edit TODO
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

  //Todo Form input change handler
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { title, description, isUpdate, todos } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="ui container">
          <TodoForm
            className=""
            title={title}
            description={description}
            addTodo={this.addTodo}
            updateTodo={this.updateTodo}
            onInputChange={this.onInputChange}
            isUpdate={isUpdate}
          />

          {todos.length !== 0 && (
            <div>
              <Todos
                todos={this.state.todos}
                editTodo={this.editTodo}
                delTodo={this.delTodo}
                changeStatus={this.changeStatus}
                isUpdate={isUpdate}
              />

              <div className="ui horizontal divider header">
                <i className="calendar alternate icon" />
                Todos Report
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <h3 style={{ flex: "2" }}>Total: {todos.length}</h3>
                <div className="ui compact menu">
                  <div className="item">
                    <i className="icon clipboard check" /> Completed
                    <div className="floating ui green label">
                      {todos.filter(todo => todo.isComplete).length}
                    </div>
                  </div>
                  <div className="item">
                    <i className="icon exclamation circle" />
                    Remaining
                    <div className="floating ui red label">
                      {todos.filter(todo => !todo.isComplete).length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
