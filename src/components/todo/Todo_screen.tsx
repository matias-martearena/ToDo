import React from 'react'

import { type Todo, type TodoId } from '#types/Todo.js'

interface TodoProps extends Todo {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
}

export const TodoScreen: React.FC<TodoProps> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleted,
}): JSX.Element => {
  const handleChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    onToggleCompleted({ id, completed: event.target.checked })
  }

  return (
    <div
      className="view"
      id={id}
    >
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => onRemoveTodo({ id })}
      />
    </div>
  )
}
