import { useEffect, useState } from "react";
import { TodoContext } from "./index.js";

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    try {
      const todos = localStorage.getItem("todos");
      return todos ? JSON.parse(todos) : [];
    } catch {
      return [];
    }
  });

  const addTodo = (todo) => {
    setTodos((prev) => [
      {
        ...todo,
      },
      ...prev,
    ]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
