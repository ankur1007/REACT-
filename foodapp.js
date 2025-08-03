import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
    - Logo
    - Nav Item
 * Body
    -Search
    - RestaurantContainer
    *  RestaurantCard
        - Img
        - Name
        - Rating
        -cuisine
        - Delivery Time
 * Img
 *  Nane of
 * Footer
 * Copyright
 * Links
 * Address
 * Contact

  */
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="img"
          src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"
          alt="image"
        ></img>
      </div>
      <div className="navitems">
        <ul>
          <li>
            {" "}
            <a href="#home">Home</a>
          </li>
          <li>
            {" "}
            <a href="#menu">Menu</a>
          </li>{" "}
          <li>
            {" "}
            <a href="#about">About</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#contact">Contact</a>
          </li>
          <li>
            {" "}
            <a href="#cart">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="content">
        <h1>Welcome to FoodApp</h1>
        <p>Order your favorite food online!</p>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for food..." />
        <button>Search</button>
      </div>
      <h2>Choose you Restro</h2>
      <div className="restrocontainer">
        <div className="restrocard">
          <img
            src="https://images.nsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="Restaurant"
          />
          <h3>Haldiram </h3>
          <p>Snacks, Pizzas, Pastas, Fast...</p>
          <p>Rating: 4.5</p>
          <p>Delivery Time: 30 mins</p>
        </div>
        <div className="restrocard">
          <img
            src="https://images.ulash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="Restaurant"
          />
          <h3>Satkar Restaurant</h3>
          <p>Cuisine: Italian</p>
          <p>Rating: 3.0</p>
          <p>Delivery Time: 20 mins</p>
        </div>
        <div className="restrocard">
          <img
            src="https://images.uslash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="Restaurant"
          />
          <h3>Dev's International</h3>
          <p>Cuisine: Italian</p>
          <p>Rating: 4.5</p>
          <p>Delivery Time: 45 mins</p>
        </div>
        <div className="restrocard">
          <img
            src="https://images.unsplas.cm/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="Restaurant"
          />
          <h3>Gupta Bhojnalay</h3>
          <p>Cuisine: Italian</p>
          <p>Rating: 4.2</p>
          <p>Delivery Time: 30 mins</p>
        </div>
        <div className="restrocard">
          <img
            src="https://images.unsplash.om/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="Restaurant"
          />
          <h3>Mac Donald's</h3>
          <p>Cuisine: Italian</p>
          <p>Rating: 4</p>
          <p>Delivery Time: 30 mins</p>
        </div>
        <div className="restrocard">
          <img
            src="https://images.unsplashcom/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="Restaurant"
          />
          <h3>The Fusion Lounge</h3>
          <p>Cuisine: Italian</p>
          <p>Rating: 3.5</p>
          <p>Delivery Time: 30 mins</p>
        </div>
        <div className="restrocard">
          <img
            src="https://images.unsplashcom/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="Restaurant"
          />
          <h3>Magic Momo</h3>
          <p>Cuisine: Italian</p>
          <p>Rating: 2.5</p>
          <p>Delivery Time: 10 mins</p>
        </div>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <Header />
        <Body />
      </header>
    </div>
  );
};

const FoodApp = ReactDOM.createRoot(document.getElementById("root"));
FoodApp.render(AppLayout());
