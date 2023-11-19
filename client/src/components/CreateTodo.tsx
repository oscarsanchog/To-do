import { useState } from 'react'
import { type TodoTittle } from '../types'

interface Props {
  saveTodo: ({ tittle }: TodoTittle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    saveTodo({ tittle: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className='new-todo'
        value={inputValue}
        onChange={(event) => { setInputValue(event.target.value) }}
        placeholder='¿Qué quieres hacer?'
        autoFocus
      />
    </form>
  )
}
