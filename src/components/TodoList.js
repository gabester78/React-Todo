import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todoListContainer">
      {props.todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <button>Add Todo</button>
      <button onClick={props.clearTodo}>Clear Todo</button>
    </div>
  );
};

export default TodoList;
