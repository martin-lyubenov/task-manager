import classes from "./Modal.module.css";
import TodoAddForm from "../components/Todo/TodoAddForm";
import { useNavigate } from "react-router-dom";


function Modal() {

  const navigate = useNavigate();

  function onCloseHandler() {
    navigate('/')
  } 


  return (
    <>
      <div onClick={onCloseHandler} className={classes.backdrop}></div>
      <div className={classes.modal}>
        <TodoAddForm  />
      </div>
    </>
  );
}

export default Modal;
