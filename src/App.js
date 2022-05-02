import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import MenuBtn from './components/menubtn/MenuBtn';
import Nav from './components/nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Accessory from './components/product/Accessory';
import Promo from './components/promo/Promo';
import News from './components/news/News';
import Contactus from './components/contact/Contactus';
import Footer from './components/footer/Footer';
import DataContext from './context/DataContext';
import { useContext } from 'react';
import useWindowSize from './components/hooks/useWindowSize';
import Missing from './components/errorpage/Missing';
import Location from './components/location/Location';
import MotorcycleDetails from './components/product/MotorcycleDetails';
import Shop from './components/product/Shop';


function App() {
  const { dispatch } = useContext(DataContext);
  const { width } = useWindowSize();


  function samp() {
    if(width >= 768){
      const elmt = document.querySelector('.main-menu');
      dispatch({ type: 'menuTop', payload: elmt.getBoundingClientRect().top });
    }
    if(window.location.pathname === '/'){
      if(document.querySelector('.home-sec1-img').getBoundingClientRect().top <= 325){
        setTimeout(() => document.querySelector('.home-sec1-img').classList.add('anim'), 500);
        // console.log("haun!");
      }
    }

  }

  return (
    <div className="App" onScroll={ samp }>
        <Nav />
        <MenuBtn />
        <Menu />

        <Routes>
          <Route path='/about' element={ <About /> } />
          <Route path='/motorcycles' element={ <Shop title="MOTORCYCLES" /> } />
          <Route path='/motorcycles/:id' element={ <MotorcycleDetails /> } />
          <Route path='/helmets' element={ <Shop title="ACCESSORIES" /> } />
          <Route path='/accessories' element={ <Shop title="ACCESSORIES" /> } />
          <Route path='/promos' element={ <Promo /> } />
          <Route path='/news' element={ <News /> } />
          <Route path='/contact' element={ <Contactus /> } />
          <Route path='/location' element={ <Location /> } />
          <Route path='/404' element={ <Missing /> } />
          <Route path='*' element={ <Missing /> } />
          <Route path='/' element={ <Home /> } />
        </Routes>


        <Footer />
    </div>
  );
}

export default App;
