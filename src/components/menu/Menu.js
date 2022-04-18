import './Menu.css';
import { Link } from 'react-router-dom';
import { useState,useContext, useEffect } from 'react';
import DataContext from '../../context/DataContext';
import anime from 'animejs';
import useWindowSize from '../hooks/useWindowSize';
import imgLogo from '../../media/logo-complete.png';

const Menu = () => {
    const [productIsClicked, setProductIsClicked] = useState(false);
    const { state, dispatch } = useContext(DataContext);
    const { width } = useWindowSize();

    
    //handleClick to automatically toggle menu when links is clicked
    const handleClick = () => {
        if(width <= 767){
            dispatch({ type: 'menuClose' });
        }
    }

    useEffect(() => {
        if(width >= 768){
            dispatch({ type: 'menuOpen'});
        }
    }, [width])

    useEffect(() => {
        setProductIsClicked(false);
        if(state.toggleMenu){
            anime(
                {
                targets: '.main-menu > ul > li',
                fontSize: '2.5em',
                delay: anime.stagger(300)
                 }
            )
        }
    }, [state.toggleMenu])

    return(
        <>
            { state.toggleMenu && (
            <div className={ `main-menu ${ state.menuTop === 0 ? 'menu-top' : ''}` }>
                <ul>
                    <li className='main-menu-list-logo' title='FILSIKLOS Home'><Link to='/' onClick={ handleClick }><img src={ process.env.PUBLIC_URL + '/banners/logo-complete.png' } alt='logo' /></Link></li>
                    <li className='main-menu-list-products'><span className='span-arrow'
                        onClick={ () => setProductIsClicked(!productIsClicked) }
                    >PRODUCTS</span>
                        <ul className={`main-menu-list-products-lists ${ !productIsClicked && 'prod-na' }`}>
                            <li><Link to='/motorcycles' onClick={ handleClick }>Motorcycles</Link></li>
                            <li><Link to='/helmet' onClick={ handleClick }>Helmet</Link></li>
                            <li><Link to='/accessories' onClick={ handleClick }>Accesories</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/promos' onClick={ handleClick }>PROMO</Link></li>
                    <li><Link to='/news' onClick={ handleClick }>NEWS & REVIEWS</Link></li>
                    <li><Link to='/location' onClick={ handleClick }>STORE LOCATION</Link></li>
                </ul>
            </div>
            )}
        </>
    )
}

export default Menu;