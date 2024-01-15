
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import logo from './images/logo..foodie.png';
import './App.css';
import './Header.css';
import './Footer.css';
import food from './images/food1.jpg'
                          
const Header = () => {
  return(
     <div className='header'>
        <div className='logo-image'>
            <img src={logo} alt="logo" className='logo'/>
        </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu List</li>
        </ul>
      </div>
     </div>
  )
}
const ResCard =({resData}) =>{
  const {title,cuisine,rating,time} =resData; //destructing
   return(
    <div className='layout'>
    <div className='container'>
      <div className='resCard'>
          <span className='card-image'>
            <img src={food} alt='card-image' className='image'/>
          </span>
        <div className='card-details'>
            <h3>{title}</h3>
            <h4>{cuisine}</h4>
            <h5>{rating}stars</h5>
            <h5>{time}min</h5>
        </div>
      </div>
    </div>
    </div>
    
  )
}
const resObj = [
  {
    id: "1",
    title: "kfc",
    cuisine: "indian",
    rating: "4",
    time: "30",
  },
  {
    id: "2",
    title: "sdfd",
    cuisine: "hjkh",
    rating: "3",
    time: "40",
  },
  {
    id: "3",
    title: "dsfsdf",
    cuisine: "awq",
    rating: "4.3",
    time: "20 ",
  },
  {
    id: "4",
    title: "sdfs",
    cuisine: "sdfss",
    rating: "4.2",
    time: "10",
  },
];

const Body = () => {
  return(
    <>
    <div className='searchLayout'>
      <input type='search' placeholder='search' className='searchInput'/>
    </div>
    <div className='resList'>
       {resObj.map((resData) => (
          <ResCard key={resData.id} resData={resData} />
        ))}
    </div>
    </>
  )

}

const Footer = () =>{
  return(
    <div className='footer'>
      <span className='copyright'>
          <p>All right goes to &copy; NikitaNegi(foodie)</p>
      </span>
      <div className='footer-list'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>More</li>
      </ul>
      </div>
    </div>
  )
}
const AppLayout = () =>{
  return(
   <div className='app'>
      <Header/>
        <Body/>
      <Footer/>
   </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)