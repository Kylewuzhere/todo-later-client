import React, { useState } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import api from "../api";

const Todo = ({ id, title, description, completed, setUpdated }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const [editItem, setEditItem] = useState(false);

  const { getAccessTokenSilently } = useAuth0();

  const handleEdit = () => {
    setEditItem(true);
  };

  const onSubmit = () => {
    const updateTodo = async () => {
      try {
        const token = await getAccessTokenSilently();
        await api.updateTodos(id, todo, token);
      } catch (e) {
        console.log(e.message);
      }
    };
    updateTodo();
    setUpdated(true);
    setEditItem(false);
    return;
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      setTodo({
        ...todo,
        [e.target.id]: e.target.placeholder,
      });
    }
    setTodo({
      ...todo,
      [e.target.id]: e.target.value,
    });
  };

  const handleDelete = (e) => {
    const deleteTodo = async () => {
      try {
        const token = await getAccessTokenSilently();
        await api.deleteTodos(id, token);
      } catch (e) {
        console.log(e.message);
      }
    };
    deleteTodo();
    setUpdated(true);
    return;
  };

  return (
    <div className="card my-2">
      <div className="card-body">
        {editItem ? (
          <form onSubmit={onSubmit}>
            <div className="form-group my-2">
              <label htmlFor="title">Title</label>
              <input
                className="form-control my-2"
                id="title"
                type="text"
                placeholder={title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="description">Description</label>
              <input
                className="form-control my-2"
                id="description"
                type="text"
                placeholder={description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="completed">Completed</label>
              <select
                className="form-control my-2"
                id="completed"
                onChange={handleChange}
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
              onClick={handleDelete}
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
              onClick={handleDelete}
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
