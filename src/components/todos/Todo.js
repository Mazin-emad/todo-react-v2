import React from "react";
import FeatherIcon from "feather-icons-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../../state/todos/todosSlice";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.data.mode);

  return (
    <div className={`todos-todo ${todo.done ? "done" : ""}`}>
      <div
        className="todos-todo_icon"
        onClick={() => dispatch(toggleTodo(todo.id))}
      >
        <FeatherIcon icon={todo.done ? "check-circle" : "circle"} />
      </div>
      <div className="todos-todo_text"> {todo.title} </div>

      {mode !== "edit" && (
        <div className="todos-todo_cta">
          <div
            className="todos-todo_cta-edit"
            onClick={() => dispatch(editTodo(todo))}
          >
            <FeatherIcon icon="edit" size={20} />
          </div>
          <div
            className="todos-todo_cta-delete"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            <FeatherIcon icon="trash-2" size={20} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
