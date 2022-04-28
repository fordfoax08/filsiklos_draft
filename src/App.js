import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import MenuBtn from './components/menubtn/MenuBtn';
import Nav from './components/nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Motorcycles from './components/product/Motorcycles';
import Helmet from './components/product/Helmet';
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
        setTimeout(() => document.querySelector('.home-sec1-img').classList.add('anim'), 1000);
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
          <Route path='/motorcycles' element={ <Motorcycles /> } />
          <Route path='/motorcycles/:id' element={ <MotorcycleDetails /> } />
          <Route path='/helmet' element={ <Helmet /> } />
          <Route path='/accessories' element={ <Accessory /> } />
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
