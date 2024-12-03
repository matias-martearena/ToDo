import './header.css'

import React from 'react'

import { type TodoTitle } from '#types/Todo.js'
import { CreateTodo } from '#components/ui/CreateTodo.tsx'

interface HeaderProps {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<HeaderProps> = ({ onAddTodo }): JSX.Element => {
  return (
    <header className="header">
      <h1>
        todo{' '}
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/300px-Typescript_logo_2020.svg.png"
          alt="TypeScript logo"
        />
      </h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
