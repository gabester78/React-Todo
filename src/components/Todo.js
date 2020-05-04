import React from "react";

const Item = (props) => {
  console.log(props, "Todo Props");
  return (
    <div>
      <p>{props.todo.name}</p>
    </div>
  );
};

export default Item;
