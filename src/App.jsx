import React, { useState } from 'react';
import Tasks from './components/Tasks';

import './App.css';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      title: 'Teste',
      id: 1,
      completed: false,
    }
  ]);
  
  // tasks.id = "0"
  
  const handleTaskAddition = taskTitle => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4,
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskRemove = taskId => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} handleTaskRemove={handleTaskRemove}  />
      </div>
    </>
  );
};

export default App;
