// import { useEffect, useState } from 'react'
import TodoListItemComponent from './TodoListItemComponent'
import useTodo from '../hooks/useTodo'

const TodoListComponent = () => {
  const { todoList, addSelectedTodo, selectedTodos, deleteSingleTodo } = useTodo()

  const handleSelectedTodo = (todo) => {
    if (!selectedTodos.includes(todo)) {
      addSelectedTodo(todo)
    } else {
      deleteSingleTodo(todo)
    }
  }

  // useEffect(() => {
  // }, [selectedTodos])

  return (
    <div className="todo-list">
      {todoList?.map((todo) => (
        <div key={todo.id} onClick={() => handleSelectedTodo(todo)} className={`${selectedTodos.includes(todo) && 'selected'} full-w`}>
          <TodoListItemComponent key={todo.id} text={todo.text} />
        </div>
      ))}
    </div>
  )
}

export default TodoListComponent