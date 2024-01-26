
import { createBrowserRouter } from "react-router-dom";
import { routeGenerator } from "../utils/routeGenetor";
import { routePaths } from "./userRoute";
import App from "../App";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
      },
      {
        path: '/user',
        element: <App />,
        children: routeGenerator(routePaths),
      },
])