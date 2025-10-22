import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Auth layout</h2>,
  },
  {
    path: "/news",
    element: <h2>News layout</h2>,
  },
  {
    path: "*",
    element: <h2>Error 404</h2>,
  },
]);

export default router;
