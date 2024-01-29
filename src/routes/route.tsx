import { createBrowserRouter } from "react-router-dom";
import { routeGenerator } from "../utils/routeGenetor";
import { routePaths } from "./userRoute";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <App />,
    children: routeGenerator(routePaths),
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
