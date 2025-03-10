import React, { useState } from "react";

interface Task {
  key: number;
  task: string;
}

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskValue, setTaskValue] = useState<string>("");

  const taskAdd = () => {
    if (taskValue.trim()) {
      setTasks([...tasks, { key: tasks.length, task: taskValue }]);
      setTaskValue("");
    }
  };

  const taskHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskValue(event.target.value);
  };

  const deleteTask = (task: Task) => {
    const removedTaskList = tasks.filter((value) => value.key !== task.key);
    setTasks(removedTaskList);
  };

  return (
    <div>
      <h1>TODO</h1>
      <div>
        <input
          className="task_name"
          type="text"
          onChange={taskHandler}
          value={taskValue}
        />
        <button className="add_task" onClick={taskAdd}>
          Add
        </button>
      </div>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <div key={task.key}>
            <div>{task.task}</div>
            <button onClick={() => deleteTask(task)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default Todo;
