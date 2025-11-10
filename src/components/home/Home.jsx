import React from 'react'
import './Home.css';

const Home = () => {
    const videoSrc = `${import.meta.env.BASE_URL}assets/Timeline.mp4`;

    return (
        <div id='home'
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <video autoPlay muted loop className="background-video">
                <source src={videoSrc} type="video/mp4" />
            </video>
            <h1 style={{ fontSize: "150px" }}>Aaron Huhtala</h1>
            <div className='fadeDiv'></div>
        </div>
    )
}

export default Home