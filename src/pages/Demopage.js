import React from "react";
import CreateTodo from "../components/CreateTodo";
import DemoTodoList from "../components/DemoTodoList";

const Homepage = () => {
  return (
    <div className="container">
      <h2 className="my-3">Welcome Demouser</h2>
      <CreateTodo />
      <DemoTodoList />
    </div>
  );
};

export default Homepage;
