import React from 'react'

import { Filters } from '#components/filters/Filters.tsx'

import { type FilterValues } from '#types/Todo.js'

interface FooterProps {
  activeCount: number
  completedCount: number
  filterSelected: FilterValues
  handleFilterChange: (filter: FilterValues) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<FooterProps> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted,
}): JSX.Element => {
  const singleActiveCount: boolean = activeCount === 1
  const activeTodoWord: string = singleActiveCount ? 'tarea' : 'tareas'

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> {activeTodoWord} pendiente
        {!singleActiveCount && 's'}
      </span>

      <Filters
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />

      {completedCount > 0 && (
        <button
          className="clear-completed"
          onClick={onClearCompleted}
        >
          Borrar completadas
        </button>
      )}
    </footer>
  )
}
