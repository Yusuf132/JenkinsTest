import { useState } from "react";

export default function App() {
  const [task, setTask] = useState([]);

  const createTask = () => {
    let newTask = {
      id: Math.random(),
      status: "InProgress",
    };
    setTask((prevTask) => [...prevTask, newTask]);
  };
  let completeTask = (event, taskComplete) => {
    event.preventDefault()
    let newChangeTask = task.map((taskId) => {
      console.log(taskId, taskComplete.id);
      if (taskId.id === taskComplete.id) {
        return {
          ...taskId,
          status: "completed",
        };
      }
      return taskId;
    });
    setTask(newChangeTask);
  };
  let filter = (name) => {
    let newTaskList = task.filter((taskName) => {
      return taskName.id === name;
    });
    setTask(newTaskList);
  };

  let renderListofTask = task.map((taskList) => {
    return (
      <div key={taskList.id}>
        Id : {taskList.name}
        Status : {taskList.status}
        <button onClick={(event) => completeTask(event, taskList)}>
          Completed
        </button>
      </div>
    );
  });

  return (
    <div>
      
      <button onClick={createTask}>Add New task </button>
      {renderListofTask}
    </div>
  );
}
