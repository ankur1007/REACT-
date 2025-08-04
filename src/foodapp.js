import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import { CDN } from "./Utils/contant.js";

const Restrocard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    slaString,
    costForTwo,
    name,
    avgRating,
    deliveryTime,
    cuisines,
  } = resData?.info;
  return (
    <div className="restrocard">
      <img className="images" src={CDN + cloudinaryImageId} />
      <h3>{name} </h3>
      <p>Delivery:{resData.info.sla.slaString} </p>
      <p>{costForTwo}</p>
      <p>{resData.info.avgRating}</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};

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
