import Container from "../UI/Container";
import Actions from "../components/Actions";
import TodoList from "../components/Todo/TodoList";

import classes from "./RootLayout.module.css";
import { Outlet } from "react-router-dom";

function RootLayout() {

  return (
    <>
      <Container>
        <h1 className={classes["main-heading"]}> TODO LIST</h1>
        <Actions  />
        <TodoList  />
      </Container>
      <Outlet />
    </>
  );
}

export default RootLayout;
