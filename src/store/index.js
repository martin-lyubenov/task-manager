import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todosSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export default store;
