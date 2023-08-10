import React from "react";
import DemoTodo from "./DemoTodo";
import todos from "../data.json";

const DemoTodoList = () => {
  return (
    <div>
      {todos &&
        todos.map((todo, index) => (
          <DemoTodo
            key={index}
            id={todo.todo_id}
            user={todo.user_id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            setUpdated={false}
          />
        ))}
    </div>
  );
};

export default DemoTodoList;
