import React, {useState} from 'react'
import ResCard from "./ResCard";
import resObj from '../../utils/resObj';

const Body = () => {
  const [filterRes, setFilterRes] = useState(resObj) // passing our data as a initial state

  function handlerClick () {
    // console.log("button")

    let data = resObj.filter(res => res.rating > 4.5)
    // console.log(data)
    setFilterRes(data)
  }

    return(
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
    )
  
  }

  export default Body;