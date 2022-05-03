import './MotorcycleDetails.css';
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import motorcyclesData from '../../localdata/Motorcycles';

function MotorcycleDetails() {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams("id");


    useEffect(() => {
        const dat = motorcyclesData.filter(item => item.id === Number(id)); 
        setData(dat[0]);
    }, [id])


  return (
    <main className='main-motorcycledetails'>
        <div className='m-m-mini-navig'>
            <div className='back-container' onClick={ () => navigate(-1) }>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-backspace-fill" viewBox="0 0 16 16">
                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                </svg>
                <h6>Back</h6>
            </div>
        </div>
        <h1 className='moto-details-name'> { data.name } </h1>
        <div className='moto-details-container'>
            <div className='moto-details-image-container'>
                <img src={ `/images/${ data.file }` } alt="motor" />
                <div className='moto-color-container'>
                    <div className='color-group'>
                        <p>Colors:</p>
                        { data.colors && data.colors.length && data.colors.map((cols, key) => <div className='moto-color' style={{ backgroundColor: `${ cols.colorVar }`}} key={ key }></div>)}
                    </div>
                </div>
            </div>
            <div className='moto-details-desc'>
                <div className='moto-price-container'>
                    <h1><span>SRP:</span> ₱{ data.originalPrice && data.originalPrice.toLocaleString() }</h1>
                    <h5><span>Monthly:</span> { data.originalPrice && Math.round((data.originalPrice) / 36).toLocaleString()}</h5>
                    <p>* Prices are indicative prices only and may be different at the branch. Prices are subject to change without prior notice.</p>
                </div>
                <p>{ data.longDesc }</p>
            </div>
            <div className='moto-details-features'>
                <h2>Features</h2>
                { data.features && data.features.length && (
                    <table>
                        <tbody>
                            { data.features.map((item, key) => (
                                <tr key={ key }>
                                    <td>{ item[0] }</td>
                                    <td>{ item[1] }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <div className='moto-details-specs'>
                <h2>Specification</h2>
                { data.specification && data.specification.length && (
                    <table>
                        <tbody>
                            { data.specification.map((item, key) => (
                                <tr key={ key }>
                                    <td>{ item[0] }</td>
                                    <td>{ item[1] }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
        <div className='more-details'>
            <p>* for more info visit our nearest branch, or message us directly.</p>
        </div>
    </main>
  )
}

export default MotorcycleDetails