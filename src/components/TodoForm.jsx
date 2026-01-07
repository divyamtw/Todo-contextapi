import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ id: Date.now(), todo, isCompleted: false });
    setTodo("");
  };

  return (
    <form className="flex gap-2" onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full rounded-lg px-4 py-2 bg-white/10 text-white placeholder-white/60 border border-white/10 outline-none backdrop-blur-md focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20 transition"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-lg px-5 py-2 bg-emerald-500/90 hover:bg-emerald-400 text-white font-semibold shadow-lg shadow-emerald-500/20 active:scale-95 transition shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
