import React, { useState } from "react";

const Todo = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTodo(props.id, newName);
    setNewName("");
    setEditing(false);
  };

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={props.id} className="edit"></label>
        <input
          id={props.id}
          type="text"
          value={newName}
          onChange={handleChange}
        ></input>
      </div>
    </form>
  );
  const viewTemplate = (
    <form>
      <div className="todo-section">
        <input
          id={props.id}
          className="checkbox"
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTodoCompleted(props.id)}
        ></input>

        <label
          style={{
            textDecoration: props.completed ? "line-through" : "",
          }}
          htmlFor={props.id}
          onClick={() => setEditing(true)}
        >
          {props.name}
        </label>
        <button
          className="delete-button"
          type="button"
          onClick={() => props.deleteTodo(props.id)}
        >
          X
        </button>
      </div>
    </form>
  );

  return <label>{isEditing ? editingTemplate : viewTemplate}</label>;
};

export default Todo;