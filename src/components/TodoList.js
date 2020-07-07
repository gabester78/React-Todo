import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  console.log(props, "Todolist props");
  return (
    <div className="todoListContainer">
      {/* map though todoList from app.js and display information */}
      {props.todoList.map((data) => (
        // feed todo component props data & function
        <Todo data={data} changeTodoBoolean={props.changeTodoBoolean} />
      ))}
      {/* feed onClick function to props data */}
      <button onClick={props.clearTodos}>Clear Completed Todo Items</button>
    </div>
  );
};

export default TodoList;
