import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { useAuth0 } from "@auth0/auth0-react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const [updated, setUpdated] = useState(false);

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getTodos = async () => {
      const accessToken = await getAccessTokenSilently();
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await response.json();
        setTodos(data);
      } catch (e) {
        console.log(e.message);
        setError(true);
        throw e;
      }
    };
    getTodos();
    setUpdated(false);
  }, [getAccessTokenSilently, updated]);

  return (
    <div>
      {error && (
        <div className="alert alert-danger" role="alert">
          Error while fetching todos!
        </div>
      )}
      {todos &&
        todos.map((todo, index) => (
          <Todo
            key={index}
            id={todo.todo_id}
            user={todo.user_id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            setUpdated={setUpdated}
          />
        ))}
    </div>
  );
};

export default TodoList;
