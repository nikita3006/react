
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './App.css';
import './src/components/Header.css';
import './src/components/Footer.css';
import food from './images/food1.jpg'
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';                    




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