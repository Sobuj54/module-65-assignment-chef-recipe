import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import LogIn from "../components/LogIn/LogIn";
import Blog from "../components/Blog/Blog";

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
    ],
  },
]);

export default router;
