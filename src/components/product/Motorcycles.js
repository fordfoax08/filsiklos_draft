import React, { useState } from 'react';
import './Motorcycles.css';
import { Link } from 'react-router-dom';
import ShopMenu from './ShopMenu';
import CardItem from './CardItem';

const Motorcycles = () => {
    const [shopMenu, setShopMenu] = useState(false);

    return(
        <main className="main-motorcycles">
            <div className='shop-banner'>
                <h3><Link to="/">HOME</Link> » MOTORCYCLES</h3>
            </div>
            <div className={`shop-menu ${ shopMenu && "open" }`}>
                { shopMenu && <ShopMenu /> }
                <button className={ `shop-menu-btn ${ shopMenu && "focus" }` } onClick={ () => setShopMenu(prev => !prev) }>»</button>
            </div>

            <div className='shop-container'>
                <div className='shop-items-container'>
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </div>
            </div>
        </main>
    )
}


export default Motorcycles;