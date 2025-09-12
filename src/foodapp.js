import React, { Children, lazy, Suspense } from "react";

import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/body";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Restaurantsmenu } from "./components/Restraurantmenu.js";

const About = lazy(() => import("./components/About"));
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
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resid",
        element: <Restaurantsmenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const FoodApp = ReactDOM.createRoot(document.getElementById("root"));
FoodApp.render(<RouterProvider router={appRouter} />);
