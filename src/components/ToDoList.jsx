import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ToDoList = ({todos, onDelete, handleCheckboxClick}) => {

  if (todos.length === 0) return <p className="text-center">No todos planned</p>

  return (
    <>
       {todos.map((todo) => (
        <div key={todo.id} className='flex justify-between border-b-2 m-20' >
          <div class="flex items-center mb-4">
          <input 
            onChange={() => handleCheckboxClick(todo.id)}
            id="default-checkbox" 
            type="checkbox" 
            value="" 
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
          />

          <label for="default-checkbox" className={`ml-20 text-sm font-medium text-gray-900 dark:text-gray-300 ${todo.isCompleted ? 'line-through' : null}`}>{todo.text}</label>
          </div>

          <button className="bg-gray-300 px-3 py-2 rounded-full" onClick={() => onDelete(todo.id)}>
            <span>
              <FontAwesomeIcon icon={faTrash} className="text-red-500" />
            </span>
          </button>
        </div>
      ))}
      </>
  )
}

export default ToDoList