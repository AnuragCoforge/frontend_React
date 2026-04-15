import React from 'react'
import { useDispatch } from 'react-redux'
import { ChangeTaskStatus } from '../redux/taskSlice'

function UpdateTaskStatus({ task }) {
    const dispatch = useDispatch()

    const setStatus = (status) => {
      dispatch(ChangeTaskStatus({ id: task.id, status }))
    }

  return (
    <div className="task-item">
      <div className="task-details">
        <strong>{task.name}</strong>
        <span className="task-status">{task.status}</span>
      </div>
      <div className="task-actions">
        <button onClick={() => setStatus('ToDo')}>ToDo</button>
        <button onClick={() => setStatus('InProgress')}>InProgress</button>
        <button onClick={() => setStatus('Done')}>Done</button>
      </div>
    </div>
  )
}

export default UpdateTaskStatus
