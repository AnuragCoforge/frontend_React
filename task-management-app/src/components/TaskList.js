import React from "react";
import { useSelector } from "react-redux";
import UpdateTaskStatus from "./UpdateTaskStatus";

function TaskList() {
  const tasks = useSelector((state) => state.task.tasks);

  return (
    <div className="task-list-container">
      <h1>Task List</h1>

      {tasks.length === 0 ? (
        <h4>No tasks available</h4>
      ) : (
        tasks.map((t) => (
          <UpdateTaskStatus key={t.id} task={t} />
        ))
      )}
    </div>
  );
}

export default TaskList;
