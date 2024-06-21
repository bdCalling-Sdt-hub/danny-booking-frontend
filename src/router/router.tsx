import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../NotFound";

export const router = createBrowserRouter([
  {
    path: "/:id",
    element: <App />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
