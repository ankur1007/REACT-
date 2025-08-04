const Restrocard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    slaString,
    costForTwo,
    name,
    deliveryTime,
    cuisines,
  } = resData?.info;
  return (
    <div className="restrocard">
      <img
        className="images"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name} </h3>
      <p>Delivery:{resData.info.sla.slaString} </p>
      <p>{costForTwo}</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};
export default Restrocard;
