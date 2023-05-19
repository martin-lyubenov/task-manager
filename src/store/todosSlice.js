import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  sortSelector: "ALL",
};

const todoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addNewTodoItem(state, action) {
      const date = new Date();
      const id = Math.random().toString();

      state.todoList.unshift({
        id,
        title: action.payload.task,
        date: {
          hours: date.getHours(),
          minutes: date.getMinutes(),
          day: date.getDate(),
          month: date.getMonth() + 1,
          year: date.getFullYear(),
        },
        checked: false,
      });
    },
    removeTodoItem(state, action) {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    editTodoItem(state, action) {
      const index = state.todoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todoList[index].title = action.payload.task;
    },
    changeCheckStatus(state, action) {
      const index = state.todoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todoList[index].checked = !state.todoList[index].checked;
    },
    changeSortStatus(state, action) {
      state.sortSelector = action.payload.newSelector;
    },
  },
});

export const todoActoins = todoSlice.actions;

export default todoSlice;
