import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import Modal from "./UI/Modal";
import { todoEditLoader } from "./components/Todo/TodoAddForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/add-todo", element: <Modal /> },
      { path: "/:todoID/edit-todo", element: <Modal />, loader: todoEditLoader},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
