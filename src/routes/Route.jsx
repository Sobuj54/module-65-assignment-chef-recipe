import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import LogIn from "../components/LogIn/LogIn";
import Blog from "../components/Blog/Blog";
import Register from "../components/register/Register";
import Chef from "../components/chef/Chef";
import ErrorPage from "../shared/error/ErrorPage";
import Recipes from "../components/recipes/Recipes";
import PrivateRoute from "../components/private/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Chef></Chef>,
        loader: () =>
          fetch("https://chefs-choice-server-sobuj54.vercel.app/chef"),
      },
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
      {
        path: "chef/:id",
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chefs-choice-server-sobuj54.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
