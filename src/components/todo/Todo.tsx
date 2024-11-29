import React from 'react'

import { type Todo as TodoProps } from '#interfaces/todo/props.js'

export const Todo: React.FC<TodoProps> = ({
  id,
  title,
  completed,
}): JSX.Element => {
  return (
    <div
      className="view"
      id={id}
    >
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => console.log('test')}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {}}
      />
    </div>
  )
}
