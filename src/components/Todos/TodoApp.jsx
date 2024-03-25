import { useState } from "react";
import { AddTodo } from "./AddTodo";
import List from "./List";
import "./todos.css";

const TodoApp = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleEnterKey = (e) => {
    if (e.code === "Enter" && newTodo !== "") {
      const id = (Math.random() + 1).toString(36).substring(7);
      setTodos((prev) => {
        return [...prev, { id, title: newTodo, checked: false }];
      });
      setNewTodo("");
    }
  };
  const handleAddTodo = (e) => {
    setNewTodo(e.target.value);
  };
  const handleRemoveTodo = (position) => {
    const filterTodos = todos.filter(({ id }) => id !== position);
    setTodos(filterTodos);
  };
  const handleMakeDone = (position) => {
    const update = todos.map((todo) =>
      todo.id === position ? { ...todo, checked: true } : todo
    );
    setTodos(update);
  };
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <List
        todos={todos}
        makeDone={handleMakeDone}
        removeTodo={handleRemoveTodo}
      />
      <AddTodo
        onKeyDown={handleEnterKey}
        onChange={handleAddTodo}
        value={newTodo}
      />
    </div>
  );
};

export default TodoApp;
