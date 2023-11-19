import { type ListOfTodos } from '../types'

export const setTodosInLocalStorage = (todos: ListOfTodos) => {
  localStorage.setItem('Todos', JSON.stringify(todos))
}
