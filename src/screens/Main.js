import React, { Component } from "react";
import "./Main.css";
import CustomInput from "../components/CustomInput/CustomInput";
import Swal from "sweetalert2";

class Main extends Component {
  state = {
    todos: [],
    title: "",
    description: "",
    update: false,
    idToUpdate: "",
    isComplete: false
  };

  onFormSubmit = e => {
    e.preventDefault();

    const { title, description, todos } = this.state;

    if (!title && !description) {
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
      const todoObj = { title, description };
      todos.push(todoObj);
      this.setState({ todos, title: "", description: "" });
      Swal.fire({
        title: "Successfully added!",
        text: "Todo List updated",
        type: "success",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  onFormUpdate = e => {
    e.preventDefault();
    const { todos, idToUpdate, title, description } = this.state;
    console.log(todos);
    todos[idToUpdate].title = title;
    todos[idToUpdate].description = description;
    this.setState({ todos, title: "", description: "", update: false });
  };

  onTodoDelete = index => {
    const { todos } = this.state;
    todos.splice(index, 1);
    this.setState({ todos });
  };

  onTodoEdit = (val, i) => {
    this.setState({
      title: val.title,
      description: val.description,
      update: true,
      idToUpdate: i
    });
  };

  onChecked = () => {
    this.setState({ isComplete: !this.state.isComplete });
  };

  render() {
    const { title, description, update, isComplete } = this.state;
    let taskDone = isComplete ? "line-through" : "";
    return (
      <React.Fragment>
        <h1
          className="ui segment header"
          style={{ backgroundColor: "cornflowerblue" }}
        >
          Todo Application
        </h1>
        <div className="ui container">
          <form
            className="ui form"
            onSubmit={update ? this.onFormUpdate : this.onFormSubmit}
          >
            <div className="field">
              <CustomInput
                type="text"
                placeholder="Enter Todo title"
                value={title}
                onChange={e => this.setState({ title: e.target.value })}
              />
            </div>
            <div className="field">
              <CustomInput
                type="text"
                placeholder="Enter Todo description"
                value={description}
                onChange={e => this.setState({ description: e.target.value })}
              />
            </div>
            <div className="field">
              <input
                type="submit"
                className="ui button primary"
                value={update ? "Update" : "Submit"}
              />
            </div>
          </form>

          <div className="ui horizontal divider header">
            <i className="tag icon" />
            Todo Items
          </div>

          <div className="ui segment">
            <ul className="ui relaxed divided list">
              {this.state.todos.map((value, index) => (
                <div className="item" key={index}>
                  <div className="content">
                    <div class="ui left floated segment">
                      <div class="ui fitted checkbox">
                        <input
                          type="checkbox"
                          onChange={() => this.onChecked(index)}
                        />
                        <label />
                      </div>
                    </div>
                    <div style={{ textDecoration: `${taskDone}` }}>
                      <h3 className="">{value.title}</h3>
                      <div className="description">{value.description}</div>
                    </div>
                    <span style={{ float: "right" }}>
                      <CustomInput
                        type="button"
                        value="Edit"
                        className="ui button positive right"
                        onClick={() => this.onTodoEdit(value, index)}
                      />
                      <CustomInput
                        type="button"
                        value="Delete"
                        className="ui button negative right"
                        onClick={() => this.onTodoDelete(index)}
                      />
                    </span>
                  </div>
                </div>
              ))}
            </ul>
          </div>
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

// <li key={index}>
//   <label>Title</label>
//   {value.title}
//   <br />
//   <label>Description</label>
//   {value.description}
// </li>
