import { useRef, useState } from "react";

import classes from "./TodoAddForm.module.css";
import AddButton from "../../UI/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { todoActoins } from "../../store/todosSlice";
import { Form, useLoaderData, useNavigate } from "react-router-dom";

function TodoAddForm() {
  const navigate = useNavigate();

  const id = useLoaderData();
  const todoList = useSelector((state) => state.todos.todoList);
  const todo = todoList.find((todo) => todo.id === id);

  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const taskInput = useRef();

  function onAddNewActionHandler(event) {
    event.preventDefault();

    const task = taskInput.current.value;

    if (task === "") {
      setError(true);
      return;
    }

    if (todo) {
      dispatch(todoActoins.editTodoItem({ task, id }));
    } else {
      dispatch(todoActoins.addNewTodoItem({ task }));
    }

    navigate("/");
  }

  function onCloseHandler() {
    navigate("/");
  }

  return (
    <Form onSubmit={onAddNewActionHandler} >
      <h1 className={classes.heading}>{todo ? 'Edit task' : 'Add a new task' }</h1>
      {error && (
        <p className={classes.error}>
          Please enter a valid task ( One or more letters )
        </p>
      )}
      <input
        defaultValue={todo ? todo.title : ""}
        ref={taskInput}
        name="newTask"
        id="newTask"
        type="text"
        className={classes["add-input"]}
      />
      <div className={classes.actions}>
        <button
          onClick={onCloseHandler}
          type="button"
          className={classes["button-cancel"]}
        >
          Cancel
        </button>
        <AddButton btnText={todo ? 'Edit Task' :"Add Task"} clickAction={null} />
      </div>
    </Form>
  );
}

export default TodoAddForm;

export function todoEditLoader({ params }) {
  const id = params.todoID;
  return id;
}
