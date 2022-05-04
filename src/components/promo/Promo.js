import React, { useEffect } from 'react';

const Promo = () => {
    useEffect(() => {
        window.location.href = "/unavailable";
    }, [])

    return (
        <main className="main-promo">
            <h1>Promos</h1>
        </main>
    )
}


export default Promo;