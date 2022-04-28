import React from 'react';
import './ShopMenu.css';

function ShopMenu() {
  return (
    <form className='form-shop' onSubmit={ e => e.preventDefault() }>
        <label htmlFor='search-shop'>Search:</label>
        <input type="text" id="search-shop" className='search-shop' name='search' placeholder='Search' title="search box"/>
        <div className='sort-container'>
            <p>Filter</p>
            <label htmlFor='sort-shop'></label>
            <select id="sort-shop">
                <option value="">Sort by</option>
                <option value="price">Price</option>
                <option value="name">Name</option>
            </select>
            <label htmlFor='order-shop'></label>
            <select id="order-shop">
                <option value="descend">Order by</option>
                <option value="ascend">Ascend</option>
                <option value="descend">Descend</option>
            </select>
        </div>
        <label htmlFor='type-shop'>Motorcycle type:</label>
        <select id="type-shop">
            <option value="">All</option>
            <option value="scooter">Scooter</option>
            <option value="underbone">Underbone</option>
            <option value="bigbike">Bikbike</option>
            <option value="offroad">Offroad</option>
        </select>
        <label htmlFor='transmission-shop'>Transmission type:</label>
        <select id="transmission-shop">
            <option value="">All</option>
            <option value="auto">Automatic</option>
            <option value="manual">Manual</option>
            <option value="semi">Semi</option>
        </select>
        <label htmlFor='brand-shop'>Brand:</label>
        <select id="brand-shop">
            <option value="">All</option>
            <option value="honda">Honda</option>
            <option value="yamaha">Yamaha</option>
            <option value="suzuki">Suzuki</option>
            <option value="kawasaki">Kawasaki</option>
            <option value="ktm">KTM</option>
            <option value="kymco">KYMCO</option>
            <option value="rusi">RUSI</option>
        </select>

        <button className='shop-submit'>Search</button>
    </form>
  )
}

export default ShopMenu