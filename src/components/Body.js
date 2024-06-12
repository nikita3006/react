import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListRes] = useState([]); // Initialize listOfRes as an empty array
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=29.1973442&lng=78.97265879999999"
      );
      const json = await response.json();

      const restaurants = json?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || [];

      console.log(restaurants, "nikita");

      setListRes(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      setListRes([]);
      setFilteredRestaurant([]);
    }
  };

  const handlerClick = () => {
    const filteredData = listOfRes.filter((data) => data?.info?.avgRating > 3);
    setListRes(filteredData);
    console.log(filteredData);
  };

  const handlerSearch = () => {
    // filter the card and update the ui
    console.log(searchText);
  };

  return !Array.isArray(listOfRes) || listOfRes.length === 0 ? (
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
              const filteredRestaurants = listOfRes.filter((data) =>
                data?.info?.name?.toLowerCase().includes(e.target.value.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          />
          <button onClick={handlerSearch}>Search</button>
        </div>
        <div className="filter-btn">
          <button type="button" onClick={handlerClick}>
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="resList">
        {filteredRestaurant.map((Data) => (
          <ResCard key={Data?.info?.id} props={Data} />
        ))}
      </div>
    </>
  );
};

export default Body;
