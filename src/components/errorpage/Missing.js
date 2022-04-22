import './Missing.css';
import { useEffect, useContext } from 'react';
import DataContext from '../../context/DataContext';

function Missing() {
    const { dispatch } = useContext(DataContext);

    useEffect(() => {
            dispatch({ type: 'menuTop', payload: 100 });
    }, [])

  return (
    <main className='main-missing'>
        <img src='/banners/404.png' alt='404'/>
    </main>
  )
}

export default Missing;