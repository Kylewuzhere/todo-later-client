import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import api from "../api";

const CreateTodo = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const { getAccessTokenSilently } = useAuth0();

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => console.log(todo));

  const onSubmit = (e) => {
    e.preventDefault();

    const create = async () => {
      try {
        const token = await getAccessTokenSilently();
        await api.postTodos(token, todo);
      } catch (e) {
        console.log(e.message);
      }
    };

    create();

    return;
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            className="form-control"
            id="title"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            className="form-control"
            id="description"
            type="text"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-outline-success">Submit</button>
      </form>
    </div>
  );
};

export default CreateTodo;
