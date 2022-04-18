const ProductCard = ({item}) => {
    // console.log(item.file)
    return(
        <div className="product-card">
            <div className="product-image">
                <span className="discount-tag">50% off</span>
                <img src={ process.env.PUBLIC_URL+`/images/${ item.file }` } className="product-thumb" alt=""/>
                <button className="card-btn">View details</button>
            </div>
            <div className="product-info">
                <h2 className="product-brand">{ item.name }</h2>
                <p className="product-short-description">{ item.shortDesc }</p>
                <span className="price">$20</span><span className="actual-price"></span>
            </div>
        </div>
    )
}

export default ProductCard;