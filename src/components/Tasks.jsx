import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, handleTaskRemove }) => {
  return (
    <>
      {tasks.map(task => (
        <Task task={task} handleTaskRemove={handleTaskRemove}/>
      ))}
    </>
  );
};

export default Tasks;
