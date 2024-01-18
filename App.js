
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import logo from './images/logo..foodie.png';
import './App.css';
import './Header.css';
import './Footer.css';
import food from './images/food1.jpg'
import Header from './src/components/Header';
import Body from './src/components/Body';
                          




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