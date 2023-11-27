import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {

  const [completed, setCompleted] = useState(task.completed);

  const handleComplete = () => {
    setCompleted(!completed);
    onCompleteTask(task.id, !completed);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (

    <>
      <div className={`task-item ${completed ? 'completed' : ''}`}>

        <button onClick={handleComplete}>
          <img src="./images/completed.png" width="30px" alt="completed" />
        </button>

        <div className="task-content">
          <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task.name}</span>
        </div>

        <button onClick={handleDelete}>
          <img src="./images/delete.png" width="30px" alt="Delete" />
        </button>
      </div>
    </>
 
  );
};

export default TaskItem;
