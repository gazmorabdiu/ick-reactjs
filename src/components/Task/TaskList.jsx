import { useState } from "react";
import { TaskDataSet } from "../data/TaskDataSet";
import "./tasks.css";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState(TaskDataSet);

  const handleCompleteTask = (position) => {
    const completeTask = tasks.map((task) => {
      if (task.id === position) {
        task.completed = true;
      }
      return task;
    });
    setTasks(completeTask);
  };
  const handleRemoveTask = (position) => {
    const filteredTasks = tasks.filter(({ id }) => id !== position);
    setTasks(filteredTasks);
  };

  return (
    <div className="container">
      {tasks.map(({ id, title, description, completed, difficulty }) => {
        return (
          <Task
            key={id}
            title={title}
            description={description}
            completed={completed}
            difficulty={difficulty}
            removeMe={() => handleRemoveTask(id)}
            completeMe={() => handleCompleteTask(id)}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
