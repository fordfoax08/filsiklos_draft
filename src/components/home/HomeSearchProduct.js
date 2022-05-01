import React from 'react'
import './HomeSearchProduct.css';

function HomeSearchProduct() {
  return (
    <div className='home-search-container'>
        <h2>SEARCH MOTORCYCLES</h2>
        <form onSubmit={ e => e.preventDefault() }>
            <div className='home-form-group'>
                <label htmlFor='home-search-text'>Search motorcycles</label>
                <input type="text" id='home-search-text' name='home-search-text' placeholder='search'/>
            </div>
            <div className='home-form-group'>
                <label htmlFor='type-search'>Desired type</label>
                <select id="type-search">
                    <option value="" style={{ color: "rgb(169, 169, 169)"}}>All</option>
                    <option value="scooter">Scooter</option>
                    <option value="underbone">Underbone</option>
                    <option value="bigbike">Bikbike</option>
                    <option value="offroad">Offroad</option>
                </select>
            </div>
            <div className='home-form-group'>
                <label htmlFor='brand-search'>Brand:</label>
                <select id="brand-search">
                    <option value="">All</option>
                    <option value="honda">Honda</option>
                    <option value="yamaha">Yamaha</option>
                    <option value="suzuki">Suzuki</option>
                    <option value="kawasaki">Kawasaki</option>
                    <option value="ktm">KTM</option>
                    <option value="kymco">KYMCO</option>
                    <option value="rusi">RUSI</option>
                </select>
            </div>
            <button>SEARCH</button>
        </form>
    </div>
  )
}

export default HomeSearchProduct