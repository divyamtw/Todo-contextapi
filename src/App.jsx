import { TodoProvider } from "./context/todo.provider";
import Todo from "./components/Todo.jsx";

const App = () => {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
};

export default App;
