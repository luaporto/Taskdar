import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Tasks from './components/Tasks';

import './App.css';
import AddTask from './components/AddTask';
import TopBar from './components/TopBar';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskClick = taskId => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = taskTitle => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskRemove = taskId => {
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <>
      <TopBar />
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskRemove={handleTaskRemove}
        />
      </div>
    </>
  );
};

export default App;
