import { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo, toggleTodo } = useTodo();

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleTodo(todo.id);
  };

  return (
    <div
      className={`
        flex items-center gap-x-3 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300 ${
          todo.isCompleted
            ? "bg-emerald-400/20"
            : "bg-white/10 hover:bg-white/15"
        }
      `}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="cursor-pointer accent-emerald-400 scale-110"
        checked={todo.isCompleted}
        onChange={toggleCompleted}
      />

      {/* Todo text */}
      <input
        type="text"
        className={`
          w-full bg-transparent outline-none text-white rounded-lg ${
            isTodoEditable
              ? "border border-white/20 px-2 py-1"
              : "border border-transparent"
          }
          ${todo.isCompleted ? "line-through text-white/50" : ""}
        `}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit / Save */}
      <button
        className="
          inline-flex w-8 h-8 rounded-lg justify-center items-center bg-white/10 border border-white/10 hover:bg-white/20 active:scale-95 transition shrink-0 disabled:opacity-40 "
        onClick={() => {
          if (todo.isCompleted) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.isCompleted}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      {/* Delete */}
      <button
        className="
          inline-flex w-8 h-8 rounded-lg justify-center items-center bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 active:scale-95 transition shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
