import { createContext, useState } from "react";
import PropTypes from "prop-types";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [undoCache, setUndoCache] = useState([]);
  const [selectedTodos, setSelectedTodos] = useState([]);

  const addTodo = (todo) => {
    setTodoList([...todoList, todo]);
  }

  const deleteMultipleTodos = () => {
    setUndoCache(selectedTodos);
    const newTodoList = todoList.filter((item) => {
      return !selectedTodos.includes(item);
    });
    setTodoList(newTodoList);
    setSelectedTodos([]);
  }

  const deleteSingleTodo = (todo) => {
    setUndoCache([todo]);
    const newTodoList = todoList.filter((item) => {
      return item !== todo;
    });
    const newTodoSelected = selectedTodos.filter((item) => {
      return item !== todo;
    });
    setSelectedTodos(newTodoSelected);
    setTodoList(newTodoList);
  }

  const addSelectedTodo = (todo) => {
    setSelectedTodos([...selectedTodos, todo]);
  }

  const undoDelete = () => {
    setTodoList([...todoList, ...undoCache]);
    setUndoCache([]);
  }

  return (
    <TodoContext.Provider
      value={{
        todoList,
        undoCache,
        selectedTodos,
        addTodo,
        addSelectedTodo,
        setSelectedTodos,
        deleteMultipleTodos,
        deleteSingleTodo,
        undoDelete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node,
};

export { TodoProvider };

export default TodoContext;
