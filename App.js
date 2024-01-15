
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import logo from './images/logo..foodie.png';
import './App.css';
import './Header.css';
import './Footer.css'
                          
const Header = ()=> {
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
      <Footer/>
   </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)