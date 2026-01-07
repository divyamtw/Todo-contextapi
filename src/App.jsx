import { TodoProvider } from "./context/todo.provider";

const App = () => {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
};

export default App;
