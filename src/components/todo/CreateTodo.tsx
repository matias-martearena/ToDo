import React, { useState } from 'react'

import { type TodoTitle } from '#types/Todo.js'

interface CreateTodoProps {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<CreateTodoProps> = ({
  saveTodo,
}): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">{''}</label>
      <input
        type="text"
        name="new-todo"
        id="new-todo"
        className="new-todo"
        placeholder="¿Qué necesitas hacer?"
        value={inputValue}
        onChange={handleChange}
        autoFocus
      />
    </form>
  )
}
