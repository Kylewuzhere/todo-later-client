import React from "react";
import CreateTodo from "../components/CreateTodo";
import TodoList from "../components/TodoList";

const Homepage = () => {
  return (
    <div className="container">
      <CreateTodo />
      <TodoList />
    </div>
  );
};

export default Homepage;
