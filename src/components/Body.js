import { Restrocard } from "./restrocard";
import { rawdatas } from "../utils/rawdata";
import { useState } from "react";

const Body = () => {
  // const [res, setRes] = useState([reslist]);
  return (
    <div className="body">
      <div className="content">
        <h1>Welcome to FoodApp</h1>
        <p>Order your favorite food online!</p>
        <button
          className="btn"
          // onClick={() => {
          //   const filteredlist = res.filter((res) => res.info.avgRating > 4);
          //   setRes(filteredlist);
          // }}
        >
          top rated
        </button>
      </div>
      <div className="search">
        <input id="bar" type="text" placeholder="Search for food..." />
        <button id="searchbutton"> Search </button>
      </div>

      <div className="restrocontainer">
        {rawdatas.map((restro) => (
          <Restrocard key={restro.info.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};
export default Body;
