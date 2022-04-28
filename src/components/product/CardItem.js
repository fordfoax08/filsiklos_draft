import React, { useEffect, useState, useMemo } from 'react';
import './CardItem.css';
import useWindowSize from '../hooks/useWindowSize';
import { useNavigate, useLocation } from 'react-router-dom';


function CardItem({ dat }) {
    const [location, setLocation] = useState("moto");
    const { width } = useWindowSize();
    const pathway = useLocation();

    const animateCard = () => {
        const elems = document.querySelectorAll('.item-card');

        elems.forEach(el => {
            /* Get the height and width of the element */
            const height = el.clientHeight;
            const width = el.clientWidth

            el.addEventListener('mousemove', handleMove);
            /* Define function a */
            function handleMove(e) {
                /*
                    * Get position of mouse cursor
                    * With respect to the element
                    * On mouseover
                    */
                /* Store the x position */
                const xVal = e.layerX
                /* Store the y position */
                const yVal = e.layerY
                
                /*
                    * Calculate rotation valuee along the Y-axis
                    * Here the multiplier 20 is to
                    * Control the rotation
                    * You can change the value and see the results
                    */
                const yRotation = 20 * ((xVal - width / 2) / width)
                
                /* Calculate the rotation along the X-axis */
                const xRotation = -20 * ((yVal - height / 2) / height)
                
                /* Generate string for CSS transform property */
                const string = 'perspective(500px) scale(1.01) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
                
                /* Apply the calculated transformation */
                el.style.transform = string
            }

            
            /* Add listener for mouseout event, remove the rotation */
            el.addEventListener('mouseout', function() {
                el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
                // el.removeEventListener('mousemove', handleMove);
            })
            
            /* Add listener for mousedown event, to simulate click */
            el.addEventListener('mousedown', function() {
                el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
            })
            
            /* Add listener for mouseup, simulate release of mouse click */
            el.addEventListener('mouseup', function() {
                el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
            })
        })


    }

    useEffect(() => {
        setLocation(pathway.pathname);
    }, [pathway.pathname])


  return (
        <>
            { location.includes("motor") && <MotorcycleCard data={ dat } animateCard={ animateCard } width={ width }/> }
            { location.includes("helmets") && <HelmetCard data={ dat } animateCard={ animateCard } width={ width }/> }
        </>
  )
}




// modules

const HelmetCard = ({data, width, animateCard}) => {

    useEffect(() => {
        console.log("sdfsdf")
        if(width >= 768){
            animateCard();
        };
    }, [width])
    

    return(
        <div className='item-card'>
            <div className='item-card-image-container'>
                <img src={ `/images/${data.file}`} alt="honda click" />
            </div>
            <div className='item-card-details-container'>
                <h5>{ data.name }</h5>
                <p>{ data.shortDesc }</p>
                <h1>₱ { data.originalPrice.toLocaleString() }</h1>
            </div>
        </div>
    )
}



const MotorcycleCard = ({data, width, animateCard}) => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("sdfsdf")
        if(width >= 768){
            animateCard();
        };
    }, [width])
    
    function handleNavigate() {
        navigate(`/motorcycles/${ data.id }`);
    }
    return(
        <div className='item-card' onClick={ handleNavigate }>
            <div className='item-card-image-container'>
                <img src={ `/images/${data.file}`} alt="honda click" />
            </div>
            <div className='item-card-details-container'>
                <h5>{ data.name }</h5>
                <p>{ data.shortDesc }</p>
                <h1>₱ { data.originalPrice.toLocaleString() }</h1>
            </div>
        </div>
    )
}


export default CardItem