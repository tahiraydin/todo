import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const TODO_DATA = [
  { id: "todo-0", name: "Taste JavaScript", completed: true },
  { id: "todo-1", name: "Code furiously", completed: false },
  { id: "todo-2", name: "Give talks", completed: false },
  { id: "todo-3", name: "Good luck", completed: false },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App todos={TODO_DATA} />
  </React.StrictMode>
);