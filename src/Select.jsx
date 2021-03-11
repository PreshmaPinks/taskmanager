import React from "react";
import "./TaskCard.css";
function Select(props) {
  return (
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
  );
}

export default Select;
