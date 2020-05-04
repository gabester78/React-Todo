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
    //update form state with each keystroke
    this.setState(
      {
        name: event.target.value,
      },
      () => console.log(this.state.name)
    );
  };
}
