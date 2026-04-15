import React from "react";
import { useDispatch} from 'react-redux'
import { addTodo } from '../features/toDo/todoSlice'
import { useState } from "react";

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler =(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('') // cleaning the input field after using it
    }

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">AddTodo</button>
    </form>
  );
}

export default AddTodo;
