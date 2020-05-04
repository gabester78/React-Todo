import React from "react";
import TodoList from "./components/TodoList";

const todoList = [
  {
    name: "Learn class components",
    id: 1,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList,
    };
  }

  addTodo = (todoName) => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false,
    };
    this.setState({ todoList: [...todoList, newTodo] });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <h3>Todo List</h3>
          <TodoList todoList={this.state.todoList} />
        </div>
      </div>
    );
  }
}

export default App;
