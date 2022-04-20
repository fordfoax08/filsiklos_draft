import React,{ useState,useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import './HomeFeatured.css';
import motorcyclesData from '../../localdata/Motorcycles';
import ProductCard from './ProductCard';


const HomeFeatured = ({title,opt}) =>{
    const [data, setData] = useState([]);
    const { width } = useWindowSize();

    useEffect(() => {
        // console.log(motorcyclesData.filter(item => item.featured));
        function setLocalData() {
            // const filteredData = motorcyclesData.filter(item => item.featured);
            // setData(filteredData);

            switch(opt){
                case 'popular':
                    setData(motorcyclesData.filter(item => item.popular).reverse());
                    break;
                default:
                    setData(motorcyclesData.filter(item => item.featured));
            }
        }

        setLocalData();
    }, [])

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
            <h2 className="product-category">{ title }</h2>
            <button className="pre-btn"><img src={ process.env.PUBLIC_URL + '/images/arrow.png' } alt="" /></button>
            <button className="nxt-btn"><img src={ process.env.PUBLIC_URL + '/images/arrow.png' } alt="" /></button>
            <div className="product-container">
                

                {
                    data.map(item => <ProductCard key={ item.id } item={ item }/> )
                }

                

            


            </div>
            <div className="browse-shop-over"></div>
            <div className="browse-shop">
                <h5>BROWSE MORE</h5>
            </div>
        </div>
    )
}


HomeFeatured.defaultProps = {
    title: "FEATURED"
}

export default HomeFeatured;