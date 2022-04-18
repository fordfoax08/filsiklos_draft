import { useState, useEffect } from 'react';

const useElementPosition = (elmt) => {
    
    const [areas, setAreas] = useState({
        top: undefined,
        bottom: undefined,
        left: undefined,
        right: undefined,
        x: undefined,
        y: undefined,
        height: undefined,
        width: undefined
    })

    useEffect(() => {
        const handleGetAreas = (elementName) => {
            const elm = document.querySelector(elementName);
            setAreas({
                top: elm.getBoundingClientRect().top,
                bottom: elm.getBoundingClientRect().bottom,
                left: elm.getBoundingClientRect().left,
                right: elm.getBoundingClientRect().right,
                x: elm.getBoundingClientRect().x,
                y: elm.getBoundingClientRect().y,
                height: elm.getBoundingClientRect().height,
                width: elm.getBoundingClientRect().width
            })
        }

        handleGetAreas(elmt);

        window.addEventListener('scroll', handleGetAreas(elmt));

        const cleanUp = () => {
            window.removeEventListener('scroll', handleGetAreas(elmt));
        }


        return cleanUp;
    }, [])


    return areas;
}

export default useElementPosition;