import TodoComponent from "./components/TodoComponent";
import { TodoProvider } from "./context/TodoProvider";

const App = () => {
  return (
    <div className="main-layout">
      <TodoProvider>
        <TodoComponent />
      </TodoProvider>
    </div>
  );
};

export default App;
