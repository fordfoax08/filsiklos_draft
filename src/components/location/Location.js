import { useEffect, useState } from 'react';
import'./Location.css';
import locationData from '../../localdata/LocationData';


const Location = () => {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        setLocation(locationData);
    }, [location])

    return(
        <main className="main-location">
            <div className='location-map'>
                <img src="/banners/map.jpg" alt="location" />
            </div>
            <div className='location-desc'>
                <div className='location-desc-welc'>
                    <h3>Branch Location</h3>
                    <p>Lorem ipsum dolor sit amet. Curabitur facilisis viverra blandit. </p>
                </div>
                { location.length && location.map(item => <LocationEntries dat={ item } key={ item.id } />) }
            </div>
        </main>
    )
}


const LocationEntries = (data) => {
    return(
        <div className='location-entries-container'>
            <article className='l-e-c-article'>
                <h4>Rizal Filsk Branch</h4>
                <p>Brgy Moringga, Lot 599 San Jose Rizal</p>
                <div></div>
            </article>
        </div>
    )
}

export default Location;