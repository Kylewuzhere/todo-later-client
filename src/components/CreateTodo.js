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
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
