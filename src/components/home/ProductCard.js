const ProductCard = ({item}) => {
    console.log(item.name)
    return(
        <div className="product-card">
            <div className="product-image">
                <span className="discount-tag">50% off</span>
                <img src={ `../../media/images/asdfsdf` } className="product-thumb" alt=""/>
                <button className="card-btn">View details</button>
            </div>
            <div className="product-info">
                <h2 className="product-brand">{ item.name }</h2>
                <p className="product-short-description">a short line about the cloth..</p>
                <span className="price">$20</span><span className="actual-price">$40</span>
            </div>
        </div>
    )
}

export default ProductCard;