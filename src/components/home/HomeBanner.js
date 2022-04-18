import './HomeBanner.css';
import { useEffect } from 'react';


const HomeBanner = () => {
    
    useEffect(() => {
        const handleChange = () => {
            const allInputs = document.querySelectorAll('.carousel-open');
            let counter = 0;

            setInterval(function(){
                if(counter >= allInputs.length){
                    counter = 0;
                    allInputs[0].checked = true;
                }
                if(!allInputs[counter].checked){
                    allInputs[counter - 1].checked = false;
                    allInputs[counter].checked = true;
                }
                counter++;
                
            }, 5000)

        }

        handleChange();
    }, [])

    return(
        <div className="carousel">
            <div className="carousel-inner">
                <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden={ true } hidden={ true } defaultChecked={ true } />
                <div className="carousel-item banner-bg1">
                    <img src={ process.env.PUBLIC_URL + '/banners/banner_pcx.jpg' } alt="img1" />
                </div>
                <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden={ true } hidden={ true } />
                <div className="carousel-item  banner-bg2">
                    <img src={ process.env.PUBLIC_URL + '/banners/banner_pcx.jpg' } alt="img1" />
                </div>
                <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden={ true } hidden={ true } />
                <div className="carousel-item banner-bg3">
                    <img src={ process.env.PUBLIC_URL + '/banners/banner_pcx.jpg' } alt="img1" />
                </div>
                <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
                <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
                <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
                <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
                <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
                <label htmlFor="carousel-1" className="carousel-control next control-3">›</label>
                <ol className="carousel-indicators">
                    <li>
                        <label htmlFor="carousel-1" className="carousel-bullet">•</label>
                    </li>
                    <li>
                        <label htmlFor="carousel-2" className="carousel-bullet">•</label>
                    </li>
                    <li>
                        <label htmlFor="carousel-3" className="carousel-bullet">•</label>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default HomeBanner;