import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, RouterProvider } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <Header />
        <Body />
      </header>
    </div>
  );
};
const appRouter = createBrowserRouter([
  { path: "/", Element: <AppLayout />, errorElement: <Error /> },
  {
    path: "/contactus",
    Element: <Contact />,
  },
  {
    path: "/About",
    Element: <About />,
  },
]);

const FoodApp = ReactDOM.createRoot(document.getElementById("root"));
FoodApp.render(<RouterProvider Router={appRouter} />);
