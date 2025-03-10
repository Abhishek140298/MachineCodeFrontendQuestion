import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTask] = useState([]);
  const [taskValue, setTaskValue] = useState("");

  const taskAdd = () => {
    setTask([...tasks, { key: tasks.length, task: taskValue }]);
    setTaskValue(prev=>'')
  };

  const taskHandler = (event) => {
    setTaskValue(event.target.value);
  };

  const deleteTask = (task) => {
    const removedTaskList = tasks.filter((value) => value.key !== task.key);
    setTask(removedTaskList);
  };
 

  return (
    <div>
      <h1>TODO</h1>
      <div>
        {" "}
        <input className="task_name" type="text" onChange={taskHandler} value={taskValue} />
        <button className="add_task" onClick={taskAdd}>
          Add
        </button>
      </div>

      {tasks.length > 0
        && tasks.map((task) => {
            return (
              <div key={task.key}>
                <div>{task.task}</div>
                <button onClick={() => deleteTask(task)}>Delete</button>
              {/*<button onClick={() => deleteTask(task)}>Edit</button> */}
              </div>
            );
          })
       }
    </div>
  );
};

export default Todo;

//Input Box
//Create Task
//List of todo task
//Container to show todo task
//Delete task
