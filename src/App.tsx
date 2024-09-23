import React from "react";
import Layout from "./Layout/Layout";
import Form from "./pages/Form";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Form />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
