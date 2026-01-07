import { useTodo } from "../context";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
const Todo = () => {
  const { todos } = useTodo();
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f172a] via-[#172842] to-[#020617] py-10 px-4">
      <div className="w-full max-w-2xl mx-auto rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl px-6 py-6 text-white">
        <h1 className="text-3xl font-bold text-center mb-8 mt-2 tracking-wide">
          Manage Your Todos
        </h1>

        <div className="mb-6">
          <TodoForm />
        </div>

        <div className="flex flex-wrap gap-y-3">
          {/* Loop and Add TodoItem here */}
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
