import React, { useState } from 'react'

import { TodosScreen } from '#components/todo/Todos_screen.tsx'
import { type Todo, type TodoList, type TodoId } from '#types/Todo.js'
import data from '#data/todo.mock.json'

export const App: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoList>(data)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({
    id,
    completed,
  }: Pick<Todo, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <TodosScreen
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleCompleted}
        todos={todos}
      />
    </div>
  )
}
