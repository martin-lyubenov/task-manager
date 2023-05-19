import classes from "./Actions.module.css";
import { useDispatch } from "react-redux";
import { todoActoins } from "../store/todosSlice";
import { Link } from "react-router-dom";

function Actions() {
  const dispatch = useDispatch();

  function selectAllHandler() {
    dispatch(todoActoins.changeSortStatus({ newSelector: "ALL" }));
  }

  function selectActiveHandler() {
    dispatch(todoActoins.changeSortStatus({ newSelector: "ACTIVE" }));
  }

  function selectCompletedHandler() {
    dispatch(todoActoins.changeSortStatus({ newSelector: "COMPLETED" }));
  }

  return (
    <div className={classes.actions}>
      <Link to={'/add-todo'} className={classes['add-button']} >Add Task</Link>
      <select className={classes.selector}>
        <option onClick={selectAllHandler}>All</option>
        <option onClick={selectActiveHandler}>Active</option>
        <option onClick={selectCompletedHandler}>Completed</option>
      </select>
    </div>
  );
}

export default Actions;
