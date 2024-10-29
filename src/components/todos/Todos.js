import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.data.todos);
  const mode = useSelector((state) => state.data.mode);
  const activeTodo = useSelector((state) => state.data.activeTodo);

  const setToLocale = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  setToLocale();

  let currentTodos = todos;
  if (mode === "filter") {
    currentTodos = todos.filter((td) => !td.done);
  }

  if (mode === "edit" && activeTodo) {
    currentTodos = [activeTodo];
  }

  return (
    <div className="todos-list">
      {currentTodos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}

      {todos.length === 0 && (
        <h3 className="no-todos">لا يوجد مهام حالية...</h3>
      )}
    </div>
  );
};

export default Todos;
