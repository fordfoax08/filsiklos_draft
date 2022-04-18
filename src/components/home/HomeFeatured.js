import useWindowSize from '../hooks/useWindowSize';
import './HomeFeatured.css';
import arrowPng from '../../media/images/arrow.png';
import card1 from '../../media/images/yamaha mio aerox 155.jpg';
import card2 from '../../media/images/RS150.jpg';
import card3 from '../../media/images/Honda-ADV-150.jpg';
import card4 from '../../media/images/tmx alpha 125 s.jpg';
import card5 from '../../media/images/yamaha-mio-sporty-115 s.jpg';
import card6 from '../../media/images/honda_click_150i.JPG';
import card7 from '../../media/images/yamaha-mio-gear.JPG';
import card8 from '../../media/images/yamaha-nmax-53577.jpg';
import { useEffect } from 'react';
import { motorcyclesData } from '../../localdata/Motorcycles';


const HomeFeatured = () =>{
    const { width } = useWindowSize();

    useEffect(() => {
        console.log(motorcyclesData);
    })

    useEffect(() => {
        const productContainers = [...document.querySelectorAll('.product-container')];
        // const productCards = [...document.querySelectorAll('.product-card')];
        const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
        const preBtn = [...document.querySelectorAll('.pre-btn')];
        // console.log(productCards[0].getBoundingClientRect())
        productContainers.forEach((item, i) => {
            // let containerDimensions = item.getBoundingClientRect();
            // let containerWidth = containerDimensions.width;

            // let containerCardDimension = productCards[0].getBoundingClientRect();
            // let containerCardWidth = containerCardDimension.width;

            if(width >= 768){
                nxtBtn[i].addEventListener('click', () => {
                    item.scrollLeft += 240;
                })
    
                preBtn[i].addEventListener('click', () => {
                    item.scrollLeft -= 240;
                })
            }

            if(width <= 767){
                nxtBtn[i].addEventListener('click', () => {
                    item.scrollLeft += 240;
                })
    
                preBtn[i].addEventListener('click', () => {
                    item.scrollLeft -= 240;
                })
            }

           
        })
    }, [width])



    return(
        <div className="featured-product"> 
        <h2 className="product-category">Featured</h2>
        <button className="pre-btn"><img src={ arrowPng } alt="" /></button>
        <button className="nxt-btn"><img src={ arrowPng } alt="" /></button>
        <div className="product-container">
            <div className="product-card">
                <div className="product-image">
                    <span className="discount-tag">50% off</span>
                    <img src={ card1 } className="product-thumb" alt=""/>
                    <button className="card-btn">View details</button>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">Yamaha Mio Aerox 155</h2>
                    <p className="product-short-description">a short line about the cloth..</p>
                    <span className="price">$20</span><span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    <span className="discount-tag">50% off</span>
                    <img src={ card2 } className="product-thumb" alt=""/>
                    <button className="card-btn">View details</button>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">Suzuki Raider 150</h2>
                    <p className="product-short-description">a short line about the cloth..</p>
                    <span className="price">$20</span><span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    <span className="discount-tag">50% off</span>
                    <img src={ card3 } className="product-thumb" alt=""/>
                    <button className="card-btn">View details</button>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">ADV 150</h2>
                    <p className="product-short-description">a short line about the cloth..</p>
                    <span className="price">$20</span><span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    <span className="discount-tag">50% off</span>
                    <img src={ card4 } className="product-thumb" alt=""/>
                    <button className="card-btn">View details</button>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">TMX Alpha 125</h2>
                    <p className="product-short-description">a short line about the cloth..</p>
                    <span className="price">$20</span><span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    <span className="discount-tag">50% off</span>
                    <img src={ card5 } className="product-thumb" alt=""/>
                    <button className="card-btn">View details</button>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">Yamaha mio spory 115</h2>
                    <p className="product-short-description">a short line about the cloth..</p>
                    <span className="price">$20</span><span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    <span className="discount-tag">50% off</span>
                    <img src={ card6 } className="product-thumb" alt=""/>
                    <button className="card-btn">View details</button>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">Honda Click 150i</h2>
                    <p className="product-short-description">a short line about the cloth..</p>
                    <span className="price">$20</span><span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    <span className="discount-tag">50% off</span>
                    <img src={ card7 } className="product-thumb" alt=""/>
                    <button className="card-btn">View details</button>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">Yamaha Mio Gear</h2>
                    <p className="product-short-description">a short line about the cloth..</p>
                    <span className="price">$20</span><span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    <span className="discount-tag">50% off</span>
                    <img src={ card8 } className="product-thumb" alt=""/>
                    <button className="card-btn">View details</button>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">Yamaha NMAX</h2>
                    <p className="product-short-description">a short line about the cloth..</p>
                    <span className="price">$20</span><span className="actual-price">$40</span>
                </div>
            </div>










        </div>
    </div>
    )
}

export default HomeFeatured;