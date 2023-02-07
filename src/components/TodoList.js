import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import todos from "../data.json";

const TodoList = () => {
  return (
    <div>
      {todos.map((todo) => (
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
