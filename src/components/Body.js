import Restrocard from "./restrocard";
import reslist from "../utils/rawdata";

const Body = () => {
  return (
    <div className="body">
      <div className="content">
        <h1>Welcome to FoodApp</h1>
        <p>Order your favorite food online!</p>
        <button
          className="btn"
          onClick={() =>
            (res = reslist.filter((res) => reslist.info.avgRating > 4.0))
          }
        >
          {console.log(res)}
          top rated
        </button>
      </div>
      <div className="search">
        <input id="bar" type="text" placeholder="Search for food..." />
        <button id="searchbutton"> Search </button>
      </div>

      <div className="restrocontainer">
        {reslist.map((restro) => (
          <Restrocard resData={restro} key={restro.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
