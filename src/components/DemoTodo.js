import React, { useState } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";

const Todo = ({ id, title, description, completed, setUpdated }) => {
  const [editItem, setEditItem] = useState(false);

  const handleEdit = () => {
    setEditItem(true);
  };

  return (
    <div className="card my-2">
      <div className="card-body">
        {editItem ? (
          <form onSubmit={() => {}}>
            <div className="form-group my-2">
              <label htmlFor="title">Title</label>
              <input
                className="form-control my-2"
                id="title"
                type="text"
                placeholder={title}
                onChange={() => {}}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="description">Description</label>
              <input
                className="form-control my-2"
                id="description"
                type="text"
                placeholder={description}
                onChange={() => {}}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="completed">Completed</label>
              <select
                className="form-control my-2"
                id="completed"
                onChange={() => {}}
                defaultValue={completed}
              >
                <option value="false">Not Completed</option>
                <option value="true">Completed</option>
              </select>
            </div>
            <button className="btn btn-outline-success my-2 me-3">
              Submit
            </button>
            <button
              className="btn btn-primary me-3"
              type="button"
              value="Input"
              onClick={handleEdit}
            >
              <CiEdit />
            </button>
            <button
              className="btn btn-danger me-3"
              type="button"
              value="Input"
              onClick={() => {}}
            >
              <CiTrash />
            </button>
          </form>
        ) : (
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              {completed ? "Completed" : "Not Completed"}
            </p>
            <button
              className="btn btn-primary me-3"
              type="button"
              value="Input"
              onClick={handleEdit}
            >
              <CiEdit />
            </button>
            <button
              className="btn btn-danger me-3"
              type="button"
              value="Input"
              onClick={() => {}}
            >
              <CiTrash />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
