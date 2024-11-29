import React, { useState } from 'react'

import { Todos } from '#components/todo/Todos.tsx'
import data from '#data/todo.mock.json'

export const App: React.FC = (): JSX.Element => {
  const [todos] = useState(data)

  return (
    <div className="todoapp">
      <Todos todos={todos} />
    </div>
  )
}
