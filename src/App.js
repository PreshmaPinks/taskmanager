import React, { useState, useEffect } from "react";
import "./App.css";
import TaskCard from "./TaskCard.jsx";
import TaskData from "./TaskData";

function App() {
  const [tasks, setTasks] = useState(null);

  const changeStatus = (e, id, status) => {
    const task = tasks[status].find((item) => id === item.id);
    const item = { ...task, status: e.target.value };
    let updatedTasks = { ...tasks };
    updatedTasks[e.target.value] = [...updatedTasks[e.target.value], item]; 
    updatedTasks[status] = updatedTasks[status].filter((val) => val.id !== id); 
    setTasks(updatedTasks);
  };

  useEffect(() => {
    setTasks(TaskData);
  }, []);

  return (
    <>
      <div className="heading">
        <h1>Sprint Task Manager</h1>
      </div>
      {tasks && (
        <div className="content">
          {Object.keys(tasks).map((val) => (
            <div key={val}>
              <div>
                {val} {tasks[val].length}
              </div>
              {tasks[val] &&
                tasks[val].map((item) => (
                  <TaskCard
                    data={item}
                    onStatusChange={changeStatus}
                    taskOptions={Object.keys(tasks)}
                    key={item.id}
                  />
                ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
