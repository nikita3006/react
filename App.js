
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import logo from './images/logo..foodie.png';
import './App.css';
import './Header.css';
                          
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

const AppLayout = () =>{
  return(
   <div className='app'>
      <Header/>
   </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)