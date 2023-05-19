import {  useSelector } from "react-redux";
import TodoItem from "./TodoItem";

import classes from "./TodoList.module.css";

function TodoList() {
  const todoList = useSelector((state) => state.todos.todoList);
  const sortSelector = useSelector((state) => state.todos.sortSelector);
  let sortedTodoList;
  let content;

  if (sortSelector === "ALL") {
    sortedTodoList = todoList.slice();
  }

  if (sortSelector === "ACTIVE") {
    sortedTodoList = todoList.filter((item) => item.checked === false);
  }

  if (sortSelector === "COMPLETED") {
    sortedTodoList = todoList.filter((item) => item.checked === true);
  }

  content = <p className={classes['no-tasks']}>No tasks found.</p>;

  if (sortedTodoList.length > 0) {
    content = (
      <ul className={classes.list}>
        {sortedTodoList.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            date={item.date}
            id={item.id}
            checked={item.checked}
          />
        ))}
      </ul>
    );
  }


  return <>{content}</>;
}

export default TodoList;
