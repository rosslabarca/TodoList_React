import React from 'react';
import TaskItem from '../TaskItem/TaskItem'; 
import '../TaskItem/TaskItem.css';


const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;

