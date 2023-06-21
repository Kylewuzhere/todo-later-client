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
        <div className="form-group my-2">
          <label htmlFor="title">Title</label>
          <input
            className="form-control my-2"
            id="title"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="description">Description</label>
          <input
            className="form-control my-2"
            id="description"
            type="text"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-outline-success my-2">Submit</button>
      </form>
    </div>
  );
};

export default CreateTodo;
