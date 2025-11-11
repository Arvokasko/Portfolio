import React from 'react'
import ImageSlider from './ImageSlider'

const Works = () => {
    return (
        <div id='works'
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <h1>My works</h1>
            <div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                }}>
                    <ImageSlider />

                </div>
            </div>
        </div>
    )
}

export default Works