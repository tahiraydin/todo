import React, { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";

const App = (props) => {
  //Todoları tutmak ve değiştirmek için -> useState
  const [todo, setTodo] = useState(props.todos);

  //Todo Eklemek için addTodo ->
  const addTodo = (name) => {
    const newTodo = { id: "todo-" + nanoid(), name: name, completed: false };
    setTodo([...todo, newTodo]);
  };

  //Todo Silmek için deleteTodo ->
  const deleteTodo = (id) => {
    const remainingTodos = todo.filter((todo) => id !== todo.id);
    setTodo(remainingTodos);
  };

  //Sadece tamamlanmış Todo'ların hepsini silmek için ->
  const deleteAllTodo = (id) => {
    const clearCompleted = todo.filter(
      (todo) => id !== todo.id && !todo.completed
    );
    setTodo(clearCompleted);
  };
  // Todo tamamlandı mı tamamlanmadı mı? ->
  const toggleTodoCompleted = (id) => {
    const updatedTodo = todo.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodo(updatedTodo);
  };

  //Girilmiş todo içeriğini değiştirme ->
  const editTodo = (id, newName) => {
    const editedTodoList = todo.map((todo) => {
      if (id === todo.id) {
        return { ...todo, name: newName };
      }
      return todo;
    });
    setTodo(editedTodoList);
  };

  //Filtreleme ->
  const [filter, setFilter] = useState("All");

  const FILTER_MAP = {
    All: () => true,
    Active: (todo) => !todo.completed,
    Completed: (todo) => todo.completed,
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  //Todoların geldiği yer ->
  const todoList = todo
    .filter(FILTER_MAP[filter])
    .map((todo) => (
      <Todo
        id={todo.id}
        name={todo.name}
        completed={todo.completed}
        key={todo.id}
        toggleTodoCompleted={toggleTodoCompleted}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    ));
  // Todo sayısı 1'e eşit değilse "tasks" eşitse "task" yazdırma ->
  const todoNoun = todoList.length !== 1 ? "tasks" : "task";
  const headingText = `${todoList.length} ${todoNoun} left`;

  return (
    <div className="container">
      <div className="header">
        <h1>todos</h1>
      </div>
      <Form addTodo={addTodo} />
      {todoList}

      <div className="footer">
        <section className="items-left">{headingText}</section>
        <section className="footer-button">{filterList}</section>
        <button onClick={() => deleteAllTodo(todo.id)}>Clear Completed</button>
      </div>
    </div>
  );
};

export default App;