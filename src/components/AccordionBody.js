import { CDN_url } from "../Utils/contant";
const AccordianBody = ({ items = [] }) => {
  return (
    <div>
      {items.map((items) => (
        <div
          key={items?.card?.info?.name}
          className="py-3 m-2 border-b-1 border-gray-400 text-left bg-gray-200"
        >
          <span className="font-bold pr-4">{items?.card?.info?.name}</span>
          <span>
            Rs.
            {items?.card?.info?.price / 100 ||
              items?.card?.info?.defaultPrice / 100}{" "}
          </span>
          <div className="flex mb-5 pb-5">
            <p className="w-[80%] flex flex-col">
              {" "}
              {items?.card?.info?.description}
            </p>
            <div className="w-[20%] flex flex-col  ">
              <div className="absolute">
                <img
                  className="w-30 h-auto rounded-2xl"
                  src={CDN_url + items?.card?.info?.imageId}
                />
                <button className="p-2 mx-8 cursor-pointer shadow-lg rounded-[8px] font-white align-middle text-xs font-bold items-center bg-blue-200">
                  Add+
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AccordianBody;
