import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import api from "../api";
import { useAuth0 } from "@auth0/auth0-react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getTodos = async () => {
      const accessToken = await getAccessTokenSilently();

      const response = await api.getTodos(accessToken);

      if (response.ok) {
        const data = await response.json();
        setTodos(data);
      } else {
        setError(true);
      }
    };
    getTodos();
  }, [getAccessTokenSilently]);

  return (
    <div>
      {error && (
        <div className="alert alert-danger" role="alert">
          Error while fetching todos!
        </div>
      )}
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.todo_id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
          />
        ))}
    </div>
  );
};

export default TodoList;
