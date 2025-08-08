import { Restrocard } from "./restrocard";
// import { rawdatas } from "../utils/rawdata";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listofrestaurent, setRestaurent] = useState([]);
  const [filteredrestaurent, setfilteredRestaurent] = useState([]);

  const [search_result, setsearch_result] = useState("");

  // fetching API
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async function () {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();

    console.log(jsondata);
    setRestaurent(
      jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRestaurent(
      jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (listofrestaurent === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="content">
        <h1>Welcome to FoodApp</h1>
        <p>Order your favorite food online!</p>
        <button
          className="btn"
          onClick={() => {
            const filteredList = listofrestaurent.filter(
              (res) => res.info.avgRating > 4.0
            );
            setRestaurent(filteredList);
          }}
        >
          Rating 4.0+
        </button>
        <button
          className="btn"
          onClick={() => {
            const filteredList = listofrestaurent.filter(
              (res) => res.info.avgRating > 0
            );
            setRestaurent(filteredList);
          }}
        >
          All restaurants
        </button>
      </div>
      <div className="search">
        <input
          id="bar"
          type="text"
          placeholder="Search for food..."
          value={search_result}
          onChange={(e) => {
            setsearch_result(e.target.value);
          }}
          // onClick={() => setfilteredRestaurent}
        />
        <button
          id="searchbutton"
          onKeyDown={() => {
            const filterdsearch = listofrestaurent.filter((res) =>
              res.info.name.toLowerCase().includes(search_result.toLowerCase())
            );

            setfilteredRestaurent(filterdsearch);
          }}
        >
          {" "}
          Search{" "}
        </button>
      </div>

      <div className="restrocontainer">
        {filteredrestaurent.map((restro, index = 0) => (
          <Restrocard key={restro.info.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};
export default Body;
