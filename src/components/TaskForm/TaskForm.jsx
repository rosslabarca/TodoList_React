import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './TaskForm.css';


const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ id: new Date().getTime(), name: taskName, completed: false });
    setTaskName('');
  };

  const handleChange = (e) => {
    if (e.target.value.length <= 50) {
      setTaskName(e.target.value);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder= {'Enter your task'}
          value={taskName}
          onChange={handleChange}
          maxLength={50}
        />
        <InputGroup.Text id="basic-addon2">
          <button type="submit"> <img src="./images/mas.png" alt="" /> </button>
        </InputGroup.Text>
      </InputGroup>

    </form>
  );
};

export default TaskForm;
