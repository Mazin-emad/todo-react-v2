import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todosSlice";

const store = configureStore({
  reducer: {
    data: todosReducer,
  },
});

export default store;
