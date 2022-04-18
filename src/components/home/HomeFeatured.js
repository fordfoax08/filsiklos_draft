import { useState,useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import './HomeFeatured.css';
import motorcyclesData from '../../localdata/Motorcycles';
import ProductCard from './ProductCard';


const HomeFeatured = () =>{
    const [data, setData] = useState([]);
    const { width } = useWindowSize();

    useEffect(() => {
        function setLocalData() {
            setData(motorcyclesData);
        }

        setLocalData();
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
        <button className="pre-btn"><img src={ process.env.PUBLIC_URL + '/images/arrow.png' } alt="" /></button>
        <button className="nxt-btn"><img src={ process.env.PUBLIC_URL + '/images/arrow.png' } alt="" /></button>
        <div className="product-container">
            

            {
                data.map(item => <ProductCard key={ item.id } item={ item }/> )
            }

            




        </div>
    </div>
    )
}

export default HomeFeatured;