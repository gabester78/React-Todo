import React from "react";

class TodoForm extends React.Component {
  //pass props & set form input state
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  handleChanges = (event) => {
    //update form state from form input
    this.setState(
      {
        name: event.target.value,
      },
      // update state with each keystroke
      () => console.log(this.state.name)
    );
  };

  submitForm = (event) => {
    //prevent browser refresh
    event.preventDefault();
    //add new todo to todolist
    this.props.addTodo(this.state.name);
    //empty out form state
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor="name">
          New Todo:
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChanges}
          />
        </label>
        <button>Add to Todo List</button>
      </form>
    );
  }
}

export default TodoForm;
