import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

//default todo list information
const todoList = [
  {
    name: "Learn class components",
    id: 1,
    completed: false,
  },
];

class App extends React.Component {
  //create todolist state from todolist object
  constructor() {
    super();
    this.state = {
      //set default todolist state
      todoList,
    };
  }

  addTodo = (todoName) => {
    //create contents of new todo list item
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false,
    };
    //updates state to add new todo list item without mutating original todo list array
    this.setState({ todoList: [...this.state.todoList, newTodo] });
  };

  changeTodoBoolean = (event) => {
    //set todo list state to contents of function
    this.setState({
      //map through current todo list data
      todoList: this.state.todoList.map((data) => {
        //compare clicked data to todo list data
        if (data.id === event) {
          //if data matches, update todo state with new completed boolean
          return {
            ...data,
            completed: !data.completed,
          };
        }
        //return new todo list data
        return data;
      }),
    });
  };

  clearTodos = (event) => {
    //prevent browser reset
    event.preventDefault();
    //filter through todo list and remove any objects with
    //completed states opposite of the default false state
    this.setState({
      todoList: this.state.todoList.filter((data) => !data.completed),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <h3>Todo List</h3>
          <TodoList
            todoList={this.state.todoList}
            changeTodoBoolean={this.changeTodoBoolean}
            clearTodos={this.clearTodos}
          />
          <TodoForm addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
