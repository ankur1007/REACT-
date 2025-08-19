import { Restrocard } from "./restrocard";
import { rawdatas } from "../utils/rawdata";
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
    console.log("Ankur");
  }, [search_result]);

  const fetchdata = async function () {
    console.log("I am here");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log("data received");
    const jsondata = await data.json();
    // debugger;-
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
        <div className="search m-4 p-4">
          <input
            className=" p-3 border-black rounded-r-none rounded-3xl"
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
            className="bg-amber-600 p-3 border rounded-br-3xl rounded-l-none rounded-tr-3xl cursor-pointer"
            id="searchbutton"
            onClick={() => {
              console.log("Click");
              const filterdsearch = listofrestaurent.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(search_result.toLowerCase())
              );

              setfilteredRestaurent(filterdsearch);
            }}
            onKeyDown={(e) => {
              console.log("Keydow");
              if (e.keyCode === 13) {
                const filterdsearch = listofrestaurent.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(search_result.toLowerCase())
                );

                setfilteredRestaurent(filterdsearch);
              }
            }}
          >
            Search
          </button>{" "}
        </div>
        <button
          className="btn p-3 bg-amber-600  cursor-pointer  "
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
          className="p-3 bg-amber-600  cursor-pointer"
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

      <div className="flex flex-wrap  justify-center-safe m-3 p-2 ">
        {filteredrestaurent.map((restro) => (
          <Restrocard key={restro.info.id} resData={restro} />
        ))}
      </div>
      <button
        onClick={() => {
          const dataupdated = fetch(
            "https://www.swiggy.com/dapi/restaurants/list/update"
          );
          dataupdated.then((response) => response.json());
          dataupdated.catch((error) => console.error(error));
          console.log(dataupdated);
        }}
      >
        {" "}
        next
      </button>
    </div>
  );
};
export default Body;
