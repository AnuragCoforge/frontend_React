import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTask as addTaskAction } from '../redux/taskSlice';

function AddTask() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (!name.trim()) return;
        const newTask = {
            id: Date.now(),
            name: name.trim(),
            status: 'ToDo',
        };
        dispatch(addTaskAction(newTask));
        setName("");
    };

  return (
    <div className="add-task-container">
      <label htmlFor="tname">Task Name</label>
      <input
        type="text"
        name="tname"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default AddTask
