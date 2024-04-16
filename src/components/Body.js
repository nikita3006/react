import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log("render")
  const [listOfRes, setListRes] = useState([]); // Initialize filterRes as an empty array
  const [searchText, setSearchText] = useState(""); //to get the data whatever user search if i want to show as a suggestion i need to bind the data with input value

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.957504937859255&lng=77.71029096096754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      // console.log(json);

      setListRes(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
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
   console.log(searchText)
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
              setSearchText(e.target.value)
              let filteredRestaurant = listOfRes.filter((data)=> data.info.name.toLowerCase().includes(searchText.toLowerCase()))
              setListRes(filteredRestaurant)
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
        {listOfRes.map((Data) => (
          <ResCard key={Data.id} props={Data} />
        ))}
      </div>
    </>
  );
};

export default Body;
