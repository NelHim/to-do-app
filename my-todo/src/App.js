import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ToDoList from "./components/ToDoList";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './todosSlice';

export default function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCheckboxClick = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleAddClick = () => {
    if (inputValue !== '') {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  return (
    <>
      <h1 className="text-8xl font-bold text-center text-slate-300 mt-36">
        todos
      </h1>

      <div className="m-20">
        <input
          type="text"
          id="todo"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="py-5 px-10 bg-gray-50 border rounded-full border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add your todo..."
          required
        />
        <button onClick={handleAddClick}>
          <FontAwesomeIcon
            icon={faPlus}
            className="absolute right-28 top-1/2 transform text-white -translate-y-1/2 bg-green-400 hover:bg-green-500 p-2 rounded-full"
          />
        </button>
      </div>
      <ToDoList
        todos={todos}
        onDelete={onDelete}
        handleCheckboxClick={handleCheckboxClick}
      />
    </>
  );
}