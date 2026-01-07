import { useContext } from "react";
import { TodoContext } from "./todo.context";

export const useTodo = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return ctx;
};
