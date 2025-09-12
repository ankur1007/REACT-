import { useState } from "react";
import AccordianBody from "./AccordionBody.js";
const ItemCard = ({ data, showitems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex;
  };

  return (
    <div>
      {/* accordian header */}
      <div
        className=" w-6/12 m-auto my-4 p-4 shadow-lg bg-gray-200 text-center cursor-pointer "
        onClick={handleClick}
      >
        <div className=" flex justify-between font-bold ">
          <span>
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>🡇</span>
        </div>

        {/* accordian  body */}
        <div>{showitems && <AccordianBody items={data?.itemCards} />}</div>
      </div>{" "}
    </div>
  );
};
export default ItemCard;
