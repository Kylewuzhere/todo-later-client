import React from "react";
import { CiEdit, CiTrash } from "react-icons/ci";

const Todo = ({ title, description, completed }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <p>{description}</p>
      <p>{completed ? "completed" : "To do"}</p>
      <button className="btn btn-primary" type="button" value="Input">
        <CiEdit />
      </button>
      <button className="btn btn-danger" type="button" value="Input">
        <CiTrash />
      </button>
    </div>
  );
};

export default Todo;
