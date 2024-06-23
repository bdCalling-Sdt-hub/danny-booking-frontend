import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cancelled from "../component/Cancelled";
import NotFound from "../NotFound";
import Cancel from "../pages/Cancel";
import Main from "../pages/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/branch/:id",
        element: <Main />,
      },
      {
        path: "/cancel/:id",
        element: <Cancel />,
      },
      {
        path: "/successfully-cancelled/:id",
        element: <Cancelled />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
