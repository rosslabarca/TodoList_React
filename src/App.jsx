import React, { useState, useEffect } from 'react';
import History from './components/History/History';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId, isCompleted) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: isCompleted } : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };


  return (
    <div className='app'>

      <div className='app-container' >
        <History className='history-content' tasks={tasks} />
      </div>

      <div className='app-container1'>

        <div className='app-container2'>
          <TaskForm onAddTask={addTask} />
        </div>

        <div className='app-container3'>
          <TaskList tasks={tasks} onCompleteTask={completeTask} onDeleteTask={deleteTask} />
        </div>

      </div>
    </div>

  );
};

export default App;
