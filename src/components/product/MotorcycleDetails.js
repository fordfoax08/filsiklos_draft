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
        <h1> { data.name } </h1>
    </main>
  )
}

export default MotorcycleDetails