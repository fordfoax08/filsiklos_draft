import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {

    return (
        <main className="main-news">
            <div className="news-banner">
                <h1>NEWS AND UPDATES</h1>
            </div>

            <div className='news-container'>
                <article className='news-body'>
                    <img src='/banners/news1.JPG' alt='news1' />
                    <div className='news-body-content'>
                        <Link to="/missing">
                            <h2>MARIKINA BRANCH</h2>
                        </Link>
                        <p>Welcome to new branch in Marikina</p>
                    </div>
                </article>
                <article className='news-body'>
                    <img src='/banners/news2.JPG' alt='news1' />
                    <div className='news-body-content'>
                        <Link to="/missing">
                            <h2>MEMBER WELCOME</h2>
                        </Link>
                        <p>lorem ipsum sol qui lema is dor finah habla con todo</p>
                    </div>
                </article>
                <article className='news-body'>
                    <img src='/banners/news3.JPG' alt='news1' />
                    <div className='news-body-content'>
                        <Link to="/missing">
                            <h2>NEW ARRIVALS APRIL 2022</h2>
                        </Link>
                        <p>lorem ipsum sol qui lema is dor finah habla con todo</p>
                    </div>
                </article>
                <article className='news-body'>
                    <img src='/banners/news4.JPG' alt='news1' />
                    <div className='news-body-content'>
                        <Link to="/missing">
                            <h2>MOTOR EXPO @PASAY</h2>
                        </Link>
                        <p>lorem ipsum sol qui lema is dor finah habla con todo</p>
                    </div>
                </article>
                <article className='news-body'>
                    <img src='/banners/news5.JPG' alt='news1' />
                    <div className='news-body-content'>
                        <Link to="/missing">
                            <h2>AUTHORIZED BRANCH</h2>
                        </Link>
                        <p>lorem ipsum sol qui lema is dor finah habla con todo</p>
                    </div>
                </article>
            </div>
        </main>
    )
}


export default News;