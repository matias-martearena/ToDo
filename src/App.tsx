import React, { useState } from 'react'

import { Header } from '#components/header/Header.tsx'
import { TodosScreen } from '#components/todo/Todos_screen.tsx'
import { Footer } from '#components/footer/Footer.tsx'

import {
  type TodoId,
  type TodoTitle,
  type Todo,
  type TodoList,
  type FilterValues,
} from '#types/Todo.js'

import data from '#data/todo.mock.json'

import { TODO_FILTERS } from '#constants/consts.ts'

export const App: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoList>(data)
  const [filterSelected, setFilterSelected] = useState<FilterValues>(
    TODO_FILTERS.ALL,
  )

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed

    return todo
  })

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

  const handleFilterChange = (filter: FilterValues): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount: number = todos.filter(todo => !todo.completed).length
  const completedCount: number = todos.length - activeCount

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo: Todo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    }

    setTodos([...todos, newTodo])
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <TodosScreen
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleCompleted}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveAllCompleted}
      />
    </div>
  )
}
