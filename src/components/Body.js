import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log("render");
  const [listOfRes, setListRes] = useState([]); // Initialize filterRes as an empty array
  const [searchText, setSearchText] = useState(""); //to get the data whatever user search if i want to show as a suggestion i need to bind the data with input value
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.1973442&lng=78.97265879999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      // console.log(json);

      setListRes(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // console.log(restaurantData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlerClick = () => {
    const filteredData = listOfRes.filter((data) => data.info.avgRating > 3);
    setListRes(filteredData);
    console.log(filteredData);
  };
  const handlerSearch = () => {
    //filter the card and update the ui
    //searchText
    console.log(searchText);
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchLayout">
        <div className="searchInput">
          <input
            type="search"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              let filteredRestaurants = listOfRes.filter((data) =>
                data.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          />
          <button onClick={handlerSearch}>Search</button>
        </div>
        <div className="filter-btn">
          <button type="filter" onClick={handlerClick}>
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="resList">
        {filteredRestaurant.map((Data) => (
          <ResCard key={Data.id} props={Data} />
        ))}
      </div>
    </>
  );
};

export default Body;
