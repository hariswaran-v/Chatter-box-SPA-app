import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GuestLayout from "./Layout/GuestLayout";
import Home from "./Home";
import PostPage from "./PostPage";
import NewPost from "./NewPost";
import About from "./About";
import Missing from "./Missing";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    errorElement: <Missing />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts", element: <PostPage /> },
      { path: "newpost", element: <NewPost /> },
      { path: "about", element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
