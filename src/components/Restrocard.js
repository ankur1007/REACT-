import { CDN } from "../Utils/contant";
export const Restrocard = (props) => {
  const { resData } = props;
  const { name, avgRating, costForTwo, cuisines, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="restrocard w-[250px] p-3 m-3 h-auto bg-gray-200 shadow-2xl scroll-auto rounded-md  hover:bg-gray-400 cursor-pointer">
      <img
        className="images rounded-xl shadow-2xs overflow-hidden"
        src={CDN + cloudinaryImageId}
      /> 
      <h3 className="font-bold py-4 text-lg">{name} </h3>
      <p>Delivery:{resData.info.sla.slaString} </p>
      <p>{costForTwo}</p>
      <p>{avgRating}</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};

export const Promotedcard = (Restrocard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-2 rounded-3xl bg-green-600 text-white">
          Veg
        </label>
        <Restrocard {...props} />
      </div>
    );
  };
};
