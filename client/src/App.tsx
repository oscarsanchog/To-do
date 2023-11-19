import { useState } from 'react'
import { Todos } from './components/Todos'
import type { Todo as TodoType, TodoId, FilterValue, TodoTittle } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { setTodosInLocalStorage } from './localStorage/setLocalStorage'
import { getTodosFromLocalStorage } from './localStorage/getLocalStorage'

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(getTodosFromLocalStorage())
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
    setTodosInLocalStorage(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () => {
    const completedTodos = todos.filter(todo => !todo.completed)
    setTodos(completedTodos)
    setTodosInLocalStorage(completedTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({ tittle }: TodoTittle) => {
    const newTodo = {
      id: crypto.randomUUID(),
      tittle,
      completed: false
    }

    const allTodos = [newTodo, ...todos]
    setTodos(allTodos)
    setTodosInLocalStorage(allTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
