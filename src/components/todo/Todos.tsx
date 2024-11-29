import React from 'react'
import { Todo } from './Todo.tsx'
import { type ListTodoProps } from '#interfaces/todo/props.js'

interface TodoProps {
  todos: ListTodoProps
}

export const Todos: React.FC<TodoProps> = ({ todos }): JSX.Element => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`${todo.completed ?? 'completed'}`}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        </li>
      ))}
    </ul>
  )
}
