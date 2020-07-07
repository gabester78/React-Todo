import React from "react";

const Item = (props) => {
  console.log(props, "Todo props");
  return (
    <div>
      <ul>
        <li
          className={`item${props.data.completed ? " completed" : ""}`}
          onClick={() => props.changeTodoBoolean(props.data.id)}
        >
          {props.data.name}
        </li>
      </ul>
    </div>
  );
};

export default Item;
