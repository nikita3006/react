import logo from '../../images/logo..foodie.png'

const Header = () => {
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
          </ul>
        </div>
       </div>
    )
  }
  export default Header;