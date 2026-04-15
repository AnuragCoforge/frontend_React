import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/toDo/todoSlice'

function Todo() {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo)=>(
        <li key={todo.id}>{todo.text} <button onClick={()=>{dispatch(removeTodo(todo.id))}}>X</button></li>
        
      ))}
    </div>
  )
}

export default Todo
