import { type ListOfTodos } from '../types'

export const getTodosFromLocalStorage = () => {
  let todos: ListOfTodos = []
  const item = localStorage.getItem('Todos')
  item !== null && (todos = JSON.parse(item))
  return todos
}
