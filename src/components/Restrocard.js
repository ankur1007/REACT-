import { CDN } from "../Utils/contant";
export const Restrocard = (props) => {
  const { resData } = props;
  const { name, avgRating, costForTwo, cuisines, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="restrocard">
      <img className="images" src={CDN + cloudinaryImageId} />
      <h3>{name} </h3>
      <p>Delivery:{resData.info.sla.slaString} </p>
      <p>{costForTwo}</p>
      <p>{avgRating}</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};
