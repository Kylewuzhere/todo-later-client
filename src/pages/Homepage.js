import React from "react";
import CreateTodo from "../components/CreateTodo";
import TodoList from "../components/TodoList";
import { useAuth0 } from "@auth0/auth0-react";

const Homepage = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="container">
      <CreateTodo />
      {isAuthenticated && <TodoList />}
    </div>
  );
};

export default Homepage;
