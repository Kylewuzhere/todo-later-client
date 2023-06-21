import React from "react";
import CreateTodo from "../components/CreateTodo";
import TodoList from "../components/TodoList";
import { useAuth0 } from "@auth0/auth0-react";

const Homepage = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="container">
        <h2 className="my-3">Welcome to Todo App</h2>
        <p>Please login to create and view your todos.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="my-3">Welcome {user.name}</h2>
      <CreateTodo />
      {isAuthenticated && <TodoList />}
    </div>
  );
};

export default Homepage;
