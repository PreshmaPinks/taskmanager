import React from "react";
import "./TaskCard.css";
import Select from './Select.jsx';

function TaskCard(props) {
  return (
    <div className={`card ${props.data.status}`}>
      <div>{props.data.title}</div>
      <div>
       <Select data={props.data} taskOptions={props.taskOptions} onStatusChange={props.onStatusChange}/>
      </div>
    </div>
  );
}

export default TaskCard;
