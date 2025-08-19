import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <Error />,
  },
]);

const FoodApp = ReactDOM.createRoot(document.getElementById("root"));
FoodApp.render(<RouterProvider router={appRouter} />);
