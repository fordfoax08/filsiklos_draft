import './MenuBtn.css';
import React,{ useContext } from 'react';
import DataContext from '../../context/DataContext';

const MenuBtn = () => {
    const { state, dispatch } = useContext(DataContext);

    return(
        <div className={ `main-menu-btn-container ${ state.toggleMenu ? 'clicked' : ''}` }
            onClick={ () => dispatch({ type: 'menuClicked'}) }
        >
            <div></div>
        </div>
    )
}

export default MenuBtn;