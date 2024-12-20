import { TODO_FILTERS } from '../constants/consts'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>
export type TodoList = Todo[]

export type FilterValues = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
