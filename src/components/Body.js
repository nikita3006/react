import ResCard from "./ResCard";
import resObj from "../../utils/resObj";

const Body = () => {
    return(
      <>
      <div className='searchLayout'>
       <div className='searchInput'><input type='search' placeholder='search' /></div>
       <div className="filter-btn"><button type="filter" >Top Rated Restaurant</button></div>
      </div>
    
      
      <div className='resList'>
         {resObj.map((Data) => (
            <ResCard key={Data.id} props={Data} />
          ))}
      </div>
      </>
    )
  
  }

  export default Body;