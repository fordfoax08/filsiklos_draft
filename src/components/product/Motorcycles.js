import React, { useState, useEffect } from 'react';
import './Motorcycles.css';
import { Link } from 'react-router-dom';
import ShopMenu from './ShopMenu';
import CardItem from './CardItem';
import motorcyclesData from '../../localdata/Motorcycles';

const Motorcycles = () => {
    const [shopMenu, setShopMenu] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(motorcyclesData);
    }, [data])

    return(
        <main className="main-motorcycles">
            <div className='shop-banner'>
                <h3><Link to="/">HOME</Link> » MOTORCYCLES</h3>
                <img src="/banners/store-banner.png" alt="store" />
            </div>
            <div className={`shop-menu ${ shopMenu && "open" }`}>
                { shopMenu && <ShopMenu /> }
                <button className={ `shop-menu-btn ${ shopMenu && "focus" }` } onClick={ () => setShopMenu(prev => !prev) }>»</button>
            </div>

            <div className='shop-container'>
                <div className='shop-items-container'>
                    { data.length && data.map(dat => <CardItem dat={ dat } key={dat.id} /> ) }
                </div>
            </div>
        </main>
    )
}


export default Motorcycles;