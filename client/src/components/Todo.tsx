import type { TodoId, Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void

}

export const Todo: React.FC<Props> = ({ id, tittle, completed, onRemoveTodo, onToggleCompleteTodo }) => {
  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompleteTodo({
      id,
      completed: event.target.checked
    })
  }

  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={handleChangeCheckBox}
      />
      <label htmlFor="">{tittle}</label>
      <button
        className="destroy"
        onClick={() => { onRemoveTodo({ id }) }}
      >
      </button>
    </div>
  )
}

export default Todo
