import React from 'react'
import './CardSuggest.css';

function CardSuggest() {
  return (
    <div className='card-suggest-container'>
        <div className='card-suggest-image-container'>
          <img src="/images/cbr150 s.JPG" alt="suggested" />
        </div>
        <div className='card-suggest-details-container'>
          <h3>SOMETHING</h3>
          <p>This is an example of suggested items listed below shop, you can see this when hovering your cursor into the items</p>
        </div>
    </div>
  )
}

export default CardSuggest