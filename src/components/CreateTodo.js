import React, { useState } from "react";

const CreateTodo = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const onSubmit = () => {
    return;
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input className="form-control" id="title" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input className="form-control" id="description" type="text" />
        </div>
        <button className="btn btn-outline-success">Submit</button>
      </form>
    </div>
  );
};

export default CreateTodo;
