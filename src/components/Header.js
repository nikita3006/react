import { useState } from 'react';
import logo from '../../images/logo..foodie.png';


const Header = () => {
  // console.log("render")
  const[btnClick, setBtnClick] = useState('')
  const handlerClick = (e) =>{
    e.preventDefault()
    setBtnClick(!btnClick);
    console.log("btn click")
  }
    return(
       <div className='header'>
          <div className='logo-image'>
              <img src={ logo } alt="logo" className='logo'/>
          </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu List</li>
            <button className='btn' onClick={handlerClick}>{btnClick ? 'LogOut' : 'LogIn'}</button>
          </ul>
        </div>
       </div>
    )
  }
  export default Header;