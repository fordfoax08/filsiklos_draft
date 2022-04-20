import React from 'react';
import './HomeWelcome.css';

const HomeWelcome = () => {
   

    
    // useEffect(() => {
    //     const anim1 = () => {
    //         const _img1 = document.querySelector('.home-sec1-img');
    //         setTimeout(() => _img1.classList.add('anim') , 2000);
    //     }
    //     anim1();
    // }, [])

    return(
        <>
            <div className='home-sec1-welcome center'>
                <img src={ process.env.PUBLIC_URL+'/banners/logo-name-2.png' } alt='logo' />
            </div>
            <div className='home-sec1-desc '>
                <h4>Motorsiklo para sa mga Pilipino</h4>
                <p>This motorcycle dealer is in partnership with known Motorcycle company owlrdwide</p>
            </div>
            <div className='home-sec1-img center'>
                <img src={ process.env.PUBLIC_URL+'/banners/hi1.png' } alt="this is for ico"/>
            </div>
        </>
    )
}

export default HomeWelcome;