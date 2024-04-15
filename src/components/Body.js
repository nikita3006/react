import React, { useState, useEffect } from 'react';
import ResCard from "./ResCard";
import Shimmer from './Shimmer';

const Body = () => {
  const [filterRes, setFilterRes] = useState([]); // Initialize filterRes as an empty array

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.957504937859255&lng=77.71029096096754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
      console.log(json);
     
      setFilterRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // console.log(restaurantData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlerClick = () => {
    const filteredData = filterRes.filter(res => res.avgRating > 4);
    setFilterRes(filteredData);
    console.log('button clicked')
  };
      if(filterRes.length === 0){
       
         return  <Shimmer/>
       
       
      }
  return (
    <>
      <div className='searchLayout'>
        <div className='searchInput'><input type='search' placeholder='search' /></div>
        <div className="filter-btn">
          <button
            type="filter"
            onClick={handlerClick}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className='resList'>
        {filterRes.map((Data) => (
          <ResCard key={Data.id} props={Data} />
        ))}
      </div>
    </>
  );
};

export default Body;
