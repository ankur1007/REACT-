import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import { CDN } from "./Utils/contant.js";

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

const FoodApp = ReactDOM.createRoot(document.getElementById("root"));
FoodApp.render(AppLayout());
