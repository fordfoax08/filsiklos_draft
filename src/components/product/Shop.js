import React, { useState, useEffect } from 'react';
import './Shop.css';
import { Link, useLocation } from 'react-router-dom';
import ShopMenu from './ShopMenu';
import CardItem from './CardItem';
import motorcyclesData from '../../localdata/Motorcycles';
import helmetData from '../../localdata/HelmetData';

const Shop = ({ title }) => {
    const [shopMenu, setShopMenu] = useState(false);
    const [data, setData] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/helmets') setData(helmetData);
        if(location.pathname === '/accessories') setData(helmetData);
        if(location.pathname === '/motorcycles') setData(motorcyclesData);
        // use window location pathname for dependency
    }, [location.pathname])

    return(
        <main className="main-shop">
            <div className='shop-banner'>
                <h3><Link to="/">HOME</Link> » { title }</h3>
                <img src="/banners/store-banner.png" alt="store" />
            </div>

            <div className={`shop-menu ${ shopMenu && "open" } ${ !location.pathname.includes("moto") && "hid" }`}>
                { shopMenu && <ShopMenu /> }
                { location.pathname.includes("moto") &&  <button className={ `shop-menu-btn ${ shopMenu && "focus" }` } onClick={ () => setShopMenu(prev => !prev) }>»</button> }               
            </div>

            <div className='shop-container'>
                <div className='shop-items-container'>
                    { data.length && data.map(dat => <CardItem dat={ dat } key={dat.id} /> ) }
                </div>
                <div className='shop-pagination-container'>
                    <button  className='shop-page-prev max'>«</button>
                    <button  className='shop-page-1'>1</button>
                    <button  className='shop-page-2 active'>2</button>
                    <button  className='shop-page-3'>3</button>
                    <button  className='shop-page-remain'>...</button>
                    <button  className='shop-page-last'>55</button>
                    <button  className='shop-page-next'>»</button>
                </div>
            </div>
        </main>
    )
}

Shop.defaultProps = {
    title: "_SHOP_"
}

export default Shop;