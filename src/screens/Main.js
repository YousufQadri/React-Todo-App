import React, { Component } from "react";
import "./Main.css";
import CustomInput from "../components/CustomInput/CustomInput";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class Main extends Component {
  state = {
    todos: [],
    title: "",
    description: ""
  };

  onFormSubmit = e => {
    e.preventDefault();

    const { title, description, todos } = this.state;

    if (!title && !description) {
      MySwal.fire({
        type: "error",
        title: "Please fill both fields"
      });
    } else if (title.length <= 2 || description <= 2) {
      MySwal.fire({
        type: "error",
        title: "Title must consist of more than 2 words"
      });
    } else {
      const todoObj = { title, description };
      todos.push(todoObj);
      this.setState({ todos, title: "", description: "" });
      Swal.fire({
        title: "Successfully addedd!",
        text: "Todo List updated",
        type: "success",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  onTodoDelete = index => {
    const { todos } = this.state;
    todos.splice(index, 1);
    this.setState({ todos });
  };

  onTodoEdit = (val, i) => {
    console.log(val);
    this.setState({ title: val.title, description: val.description });
  };

  render() {
    return (
      <React.Fragment>
        <h1
          className="ui segment header"
          style={{ backgroundColor: "cornflowerblue" }}
        >
          Todo Application
        </h1>
        <div className="ui container">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <CustomInput
                type="text"
                placeholder="Enter Todo title"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
              />
            </div>
            <div className="field">
              <CustomInput
                type="text"
                placeholder="Enter Todo description"
                value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })}
              />
            </div>
            <div className="field">
              <CustomInput type="submit" className="ui button primary" />
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
                  <i className="large history middle aligned icon" />
                  <div className="content">
                    <h3 className="">{value.title}</h3>
                    <div className="description">{value.description}</div>
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
