import { createSlice } from "@reduxjs/toolkit";

const initialTodos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const todosSlice = createSlice({
  name: "data",
  initialState: {
    todos: initialTodos,
    activeTodo: null,
    mode: "add",
  },
  reducers: {
    addTodo: (state, action) => {
      if (state.mode === "edit") {
        const todo = state.todos.find(
          (todo) => todo.id === state.activeTodo.id
        );
        if (todo) {
          todo.title = action.payload;
          state.mode = "add";
          state.activeTodo = null;
        }
      } else {
        state.todos.push({
          id: new Date().getTime(),
          title: action.payload,
          done: false,
        });
      }
    },
    toggleTodo: (state, action) => {
      state.todos.map((td) => {
        if (td.id === action.payload) {
          td.done = !td.done;
        }
        return td;
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.mode = "edit";
      state.activeTodo = action.payload;
    },
    setActiveTodo: (state, action) => {
      state.activeTodo = action.payload;
    },
    filterTodos: (state) => {
      if (state.mode === "edit") {
        return;
      } else if (state.mode === "filter") {
        state.mode = "add";
      } else {
        state.mode = "filter";
      }
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  setMode,
  filterTodos,
  setActiveTodo,
} = todosSlice.actions;
export default todosSlice.reducer;
