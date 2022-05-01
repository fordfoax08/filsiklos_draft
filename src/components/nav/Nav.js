import { Link } from 'react-router-dom';
import './Nav.css';
import React,{ useContext } from 'react';
import DataContext from '../../context/DataContext';
import useWindowSize from '../hooks/useWindowSize';


const Nav = () => {
    const { dispatch } = useContext(DataContext);
    const { width } = useWindowSize();


    
    const hideHome = () => {
        if(width >= 768) return { display: 'none'};
    }

    const handleClick = () => {
        if(width <= 767){
            dispatch({ type: 'menuClose' })
        }
    }
    
    return(
        <nav className='main-nav' id="top-nav">
            <ul onClick={ handleClick }>
                <li className='main-nav-li-link-home li-hidden'  style={hideHome()}><Link to='/' className='main-nav-link-home'>Home</Link></li>
                <li><Link to='/about' className='main-nav-link-about'>About</Link></li>
                <li><Link to='/contact' className='main-nav-link-contact'>Contact Us</Link></li>
            </ul>
        </nav>
    )
}


export default Nav;