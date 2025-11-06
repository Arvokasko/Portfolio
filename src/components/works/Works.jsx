import React from 'react'
import ImageSlider from '../ImageSlider'

const Works = () => {
    return (
        <div id='works'
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                }}>
                    <ImageSlider />
                    {/* <div style={{ width: "500px", height: "250px", backgroundColor: "gray", textAlign: "center" }}>
                        <h1>papa</h1>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Works