import React, { useState } from "react";
import FeatherIcons from "feather-icons-react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, filterTodos } from "../../state/todos/todosSlice";

const TodosForm = () => {
  const [title, setTitle] = useState("");
  const [editRerender, setEditRender] = useState(false);

  const activeTodo = useSelector((state) => state.data.activeTodo);
  const mode = useSelector((state) => state.data.mode);
  const dispatch = useDispatch();

  if (mode === "edit" && !editRerender) {
    setEditRender(true);
    setTitle(activeTodo.title);
  }

  const handelInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handelAddNewTodo = () => {
    setEditRender(false);
    if (!title.trim()) {
      return;
    }
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div className="todos-form">
      <div
        className={`todos-form_icon ${mode === "filter" ? "active" : ""}`}
        onClick={() => dispatch(filterTodos())}
      >
        <FeatherIcons icon="circle" />
      </div>
      <div className="todos-form_form">
        <input
          type="text"
          placeholder="اضف مهمة جديدة ..."
          onChange={handelInputChange}
          value={title}
        />
      </div>
      <div className="todos-form_submit">
        <button
          className="btn"
          disabled={!title.trim()}
          onClick={handelAddNewTodo}
        >
          {mode === "edit" ? "تعديل..." : "اضافة"}
        </button>
      </div>
    </div>
  );
};

export default TodosForm;
