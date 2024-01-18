import ResCard from "./ResCard";
import resObj from "./ResObj";

const Body = () => {
    return(
      <>
      <div className='searchLayout'>
        <input type='search' placeholder='search' className='searchInput'/>
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