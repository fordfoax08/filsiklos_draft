import './Home.css';
import { useEffect } from 'react';
import HomeBanner from './HomeBanner';
import HomeFeatured from './HomeFeatured';
import HomeWelcome from './HomeWelcome';

// process.env.PUBLIC_URL+
const Home = () => {

   

    return(
        <main className="main-home">
            

            <section className='home-banner'>
                <HomeBanner />
            </section>

            <section className='home-featured-product'>
                <HomeFeatured />
                <HomeFeatured title={ "POPULAR MOTORCYCLES" } opt={ "popular" } />
            </section>

            <section className='home-sec-1'>
                <HomeWelcome />
            </section>

            <section className='img-a'>
                <img src={ process.env.PUBLIC_URL+'/banners/filski_2.jpg' } alt="details" />
            </section>

        </main>
    )
}

export default Home;