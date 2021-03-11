import React from "react";
import "./TaskCard.css";
function TaskCard(props) {
  return (
    <div className={`card ${props.data.status}`}>
      <div>{props.data.title}</div>
      <div>
        <select
          value={props.data.status}
          onChange={(event) =>
            props.onStatusChange(event, props.data.id, props.data.status)
          }
        >
          {props.taskOptions.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default TaskCard;
