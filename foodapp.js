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

//
//    /*restData is passed as key or props and resobj is argument*/S

const resobj = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "234875",
      name: "Adil Hotel",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "Rautha Wada",
      areaName: "Chhindwara Locality",
      costForTwo: "₹150 for two",
      cuisines: ["Biryani", "Tandoor"],
      avgRating: 4.4,
      parentId: "27123",
      avgRatingString: "4.4",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 11.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "11.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-04 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c3bb75cf-b0fe-46ce-b73b-601274f1ab9b",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "618037",
      name: "Jai Ganesh Bhojnalaya",
      cloudinaryImageId: "yzgqriufpzmloogcn2vl",
      locality: "Railway Colony",
      areaName: "Bus stand",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Indian", "Chinese"],
      avgRating: 4.1,
      veg: true,
      parentId: "368432",
      avgRatingString: "4.1",
      totalRatingsString: "434",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 12.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "12.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-03 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹22",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c3bb75cf-b0fe-46ce-b73b-601274f1ab9b",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/jai-ganesh-bhojnalaya-railway-colony-bus-stand-rest618037",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "151518",
      name: "Bakery World",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 4.3,
      veg: true,
      parentId: "40363",
      avgRatingString: "4.3",
      totalRatingsString: "285",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 14.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "14.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-03 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c3bb75cf-b0fe-46ce-b73b-601274f1ab9b",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1046503",
      name: "The Kohli's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/17/6a4369e1-0c9c-49f9-8132-5be682a7831f_1046503.jpg",
      locality: "Chhindwara City",
      areaName: "Chhindwara City",
      costForTwo: "₹200 for two",
      cuisines: [
        "Chinese",
        "Biryani",
        "Beverages",
        "Tandoor",
        "Salads",
        "Snacks",
        "Pastas",
        "Fast Food",
        "North Indian",
      ],
      avgRating: 3.9,
      veg: true,
      parentId: "608777",
      avgRatingString: "3.9",
      totalRatingsString: "98",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 13.4,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "13.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-03 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹131 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c3bb75cf-b0fe-46ce-b73b-601274f1ab9b",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/the-kohlis-chhindwara-city-rest1046503",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "151656",
      name: "Dev International",
      cloudinaryImageId: "enj3srsnhbltbom2ovvh",
      locality: "khajri road",
      areaName: "Mohan Nagar",
      costForTwo: "₹100 for two",
      cuisines: ["Chinese", "Fast Food", "Beverages"],
      avgRating: 4.3,
      parentId: "71556",
      avgRatingString: "4.3",
      totalRatingsString: "552",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 13.6,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "13.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-03 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c3bb75cf-b0fe-46ce-b73b-601274f1ab9b",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "151649",
      name: "Hotel Sai Nath & Sai Restaurant",
      cloudinaryImageId: "vkhcohhmqfczycw9vsar",
      locality: "railway station",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "101802",
      avgRatingString: "4.3",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 11.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "11.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-03 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹33",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c3bb75cf-b0fe-46ce-b73b-601274f1ab9b",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

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

const Body = () => {
  return (
    <div className="body">
      <div className="content">
        <h1>Welcome to FoodApp</h1>
        <p>Order your favorite food online!</p>
      </div>
      <div className="search">
        <input id="bar" type="text" placeholder="Search for food..." />
        <button id="searchbutton"> Search </button>
      </div>

      <div className="restrocontainer">
        <Restrocard resData={resobj[0]} />
        <Restrocard resData={resobj[1]} />
        <Restrocard resData={resobj[2]} />
        <Restrocard resData={resobj[3]} />
        <Restrocard resData={resobj[4]} />
        <Restrocard resData={resobj[5]} />
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
