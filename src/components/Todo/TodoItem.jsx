import { todoActoins } from "../../store/todosSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";

import classes from "./TodoItem.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function TodoItem({ title, date, id, checked, }) {
  const dispatch = useDispatch();

  function changeCheckHandler() {
    dispatch(todoActoins.changeCheckStatus({ id }));
  }

  function todoDeleteHandler() {
    dispatch(todoActoins.removeTodoItem({id}))
  }


  return (
    <li className={classes["list-item"]}>
      <div className={classes["task-details"]}>
        <div className={classes.checkbox}>
          <input
            onChange={changeCheckHandler}
            type="checkbox"
            checked={checked}
            id="completed"
            name="completed"
          ></input>
        </div>
        <div>
          <label className={classes.label} htmlFor="completed">
            {title}
          </label>
          <p className={classes.date}>{date.hours}:{date.minutes}, {date.day}/{date.month}/{date.year}</p>
        </div>
      </div>

      <div className={classes.actions}>
        <button className={classes.button} onClick={todoDeleteHandler}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <Link  to={`/${id}/edit-todo`} className={classes['add-button']}>
          <FontAwesomeIcon icon={faPen} />
        </Link>
      </div>
    </li>
  );
}

export default TodoItem;
