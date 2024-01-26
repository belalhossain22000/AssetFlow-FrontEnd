import { createBrowserRouter } from "react-router-dom";
import { routeGenerator } from "../utils/routeGenetor";
import { routePaths } from "./userRoute";
import App from "../App";
import Login from "../pages/Login";

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
    path: "/login",
    element: <Login />,
  },
]);
