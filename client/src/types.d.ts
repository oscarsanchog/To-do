export interface Todo {
  id: string
  tittle: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTittle = Pick<Todo, 'tittle'>
export type TodoCompleted = Pick<Todo, 'completed'>
  
export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
