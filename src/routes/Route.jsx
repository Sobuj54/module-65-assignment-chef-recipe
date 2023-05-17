import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import LogIn from "../components/LogIn/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);

export default router;
