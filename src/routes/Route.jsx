import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import LogIn from "../components/LogIn/LogIn";
import Blog from "../components/Blog/Blog";
import Register from "../components/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
