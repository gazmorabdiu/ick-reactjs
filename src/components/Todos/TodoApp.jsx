import { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import List from "./List";
import "./todos.css";

const TodoApp = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [unCompleteTodo, setUnCompleteTodo] = useState(0);

  useEffect(() => {
    const count = todos.filter((todo) => !todo.checked).length;
    setUnCompleteTodo(count);
  }, [todos]);
  const handleEnterKey = (e) => {
    if (e.code === "Enter" && newTodo !== "") {
      const id = (Math.random() + 1).toString(36).substring(7);
      const date = new Date();
      const localDate = date.toLocaleDateString();
      const localTime = date.toLocaleTimeString();

      // const

      setTodos((prev) => {
        return [
          ...prev,
          {
            id,
            title: newTodo,
            checked: false,
            createdAt: `${localDate} ${localTime}`,
          },
        ];
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

    // setTodos(update);
  };
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <List
        todos={todos}
        makeDone={handleMakeDone}
        removeTodo={handleRemoveTodo}
      />
      <span style={{ color: "red" }}>{unCompleteTodo} todo left</span>
      <AddTodo
        onKeyDown={handleEnterKey}
        onChange={handleAddTodo}
        value={newTodo}
      />
    </div>
  );
};

export default TodoApp;
