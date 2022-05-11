import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(name);
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          id={props.id}
          value={name}
          type="text"
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
};

export default Form;
