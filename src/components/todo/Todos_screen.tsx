import React from 'react'
import { TodoScreen } from './Todo_screen.tsx'
import { type Todo, type TodoList, type TodoId } from '#types/Todo.js'

interface TodosProps {
  todos: TodoList
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
}

export const TodosScreen: React.FC<TodosProps> = ({
  todos,
  onRemoveTodo,
  onToggleCompleted,
}): JSX.Element => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''}`}
        >
          <TodoScreen
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleted={onToggleCompleted}
          />
        </li>
      ))}
    </ul>
  )
}
