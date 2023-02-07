import React from "react";

const Todo = ({ title, description, completed }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <p>{description}</p>
      <p>{completed ? "completed" : "To do"}</p>
    </div>
  );
};

export default Todo;
