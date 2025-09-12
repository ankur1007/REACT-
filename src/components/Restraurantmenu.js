import { useEffect, useState } from "react";
import ItemCard from "./ItemCard.js";

export const Restaurantsmenu = () => {
  const [resInfo, setResInfo] = useState({ cards: [] });
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchmenu();
  }, []);

  const fetchmenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.9716012&lng=77.6698398&restaurantId=368179&catalog_qa=undefined&submitAction=ENTER"
    );
    // debugger;
    const jsonmenu = await data.json();
    console.log(jsonmenu);

    setResInfo(jsonmenu.data);
  };

  if (resInfo === null) {
    return <h1>Loading...</h1>;
  }

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];

  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ) || [];

  const { categoryID } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ) || [];

  const {
    name,
    defaultPrice,
    description,
    avgRating,
    costForTwoMessage,
    deliveryTime,
  } = resInfo?.cards[2]?.card?.card?.info || [];

  // const headercard = resInfo?.cards[2]?.card?.card || []
  // console.log(headercard);

  return (
    <div>
      {" "}
      <div className="flex flex-col m-4 p-4 border border-gray-300 justify-center items-center">
        <p className="flex center">{name}</p>
        <p className="flex center">
          Rating: {avgRating}- {costForTwoMessage} ✦
        </p>{" "}
        <p>Delivery Time: {deliveryTime} mins</p>
      </div>
      <div>
        {category.map((category, index) => (
          <ItemCard
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showitems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
