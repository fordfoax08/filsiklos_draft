import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate = useNavigate();

    return(
        <div className="product-card">
            <div className="product-image">
                <span className="discount-tag">50% off</span>
                <img src={ process.env.PUBLIC_URL+`/images/${ item.file }` } className="product-thumb" alt=""/>
                <button className="card-btn" onClick={ () => navigate(`/motorcycles/${ item.id }`)}>View details</button>
            </div>
            <div className="product-info">
                <h2 className="product-brand">{ item.name }</h2>
                <p className="product-short-description">{ item.shortDesc }</p>
                <span className="price">₱{ item.originalPrice.toLocaleString() }</span><span className="actual-price"></span>
            </div>
        </div>
    )
}

export default ProductCard;