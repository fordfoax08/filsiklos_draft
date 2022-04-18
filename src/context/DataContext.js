import { createContext, useReducer } from "react";


const initVal = {
    toggleMenu: false,
    menuTop: undefined
}


const reducer = (state, action) => {
    switch(action.type){
        case 'menuClicked':
            return { ...state, toggleMenu: !state.toggleMenu };
        case 'menuOpen':
            return { ...state, toggleMenu: true };
        case 'menuClose':
            return { ...state, toggleMenu: false };
        case 'menuTop':
            return { ...state, menuTop: action.payload }
        default:
            throw Error('Error Message from reducer')
    }
}


const DataContext = createContext({});
export const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initVal);


    return(
        <DataContext.Provider value={{ 
            state, dispatch
         }}>
            {children}
        </DataContext.Provider>
    )
}



export default DataContext;