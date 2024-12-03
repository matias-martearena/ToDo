import React from 'react'

import { type FilterValues } from '#types/Todo.js'
import { FILTERS_BUTTONS } from '#constants/consts.ts'

interface FiltersProps {
  filterSelected: FilterValues
  handleFilterChange: (filter: FilterValues) => void
}

export const Filters: React.FC<FiltersProps> = ({
  filterSelected,
  handleFilterChange,
}): JSX.Element => {
  const handleClick = (filter: FilterValues) => {
    return (event: React.MouseEvent<HTMLAnchorElement>): void => {
      event.preventDefault()
      handleFilterChange(filter)
    }
  }

  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected: boolean = key === filterSelected
        const className: string = isSelected ? 'selected' : ''

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={handleClick(key as FilterValues)}
            >
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
