import React from 'react';
import './Task.css';

const Task = ({ task, handleTaskRemove }) => {
  return (
    <div>
      <div className="task-container" >
        {task.title}
      </div>
      <div>
        <button className="remove-task-button" onClick={() => handleTaskRemove(task.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Task;
