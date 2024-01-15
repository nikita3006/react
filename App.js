
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
const ResCard =(props) =>{
  console.log(props)
  return(
    <div className='layout'>
    <div className='container'>
      <div className='resCard'>
          <span className='card-image'>
            <img src={food} alt='card-image' className='image'/>
          </span>
        <div className='card-details'>
            <h3>{props.title}</h3>
            <h4>{props.cuisine}</h4>
            <h5>{props.rating}</h5>
            <h5>{props.time}</h5>
        </div>
      </div>
    </div>
    </div>
    
  )
}
const Body = () => {
  return(
    <>
    <div className='searchLayout'>
      <input type='search' placeholder='search' className='searchInput'/>
    </div>
    <div className='resList'>
        <ResCard  title="kfc" cuisine="indian" rating="4 stars" time="30 min"/>
        <ResCard  title="alu" cuisine="indian" rating="3 stars" time="40 min"/> 
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