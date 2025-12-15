import React, { useState, useEffect } from 'react'
import './Home.css';

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div id='home'
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <h1 className={`homeHeader ${isLoaded ? 'loaded' : ''}`}>Aaron Huhtala</h1>
        </div>
    )
}

export default Home