import React from 'react'

const AboutMe = () => {
    return (
        <div id='aboutMe'
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <h1>
                About me
            </h1>
            <div style={{ maxWidth: "1000px", width: "100%", overflowWrap: "break-word" }}>

                <p>
                    I'm a passionate website developer currently in my second year of professional experience, based in Oulu, Finland. With a strong foundation in front-end and back-end technologies, I specialize in creating responsive, user-friendly websites that blend functionality with clean design. My journey in web development has been driven by curiosity, continuous learning, and a commitment to delivering high-quality digital experiences.
                </p>

                <div>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>

                        <div style={{ width: "150px", height: "150px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
                                alt="icon"
                                style={{ width: "80px", height: "80px", }}
                            />
                        </div>
                        <div style={{ width: "150px", height: "150px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
                                alt="icon"
                                style={{ width: "80px", height: "80px", }}
                            />
                        </div>
                        <div style={{ width: "150px", height: "150px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
                                alt="icon"
                                style={{ width: "80px", height: "80px", }}
                            />
                        </div>
                        <div style={{ width: "150px", height: "150px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
                                alt="icon"
                                style={{ width: "80px", height: "80px", }}
                            />
                        </div>
                        <div style={{ width: "150px", height: "150px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
                                alt="icon"
                                style={{ width: "80px", height: "80px", }}
                            />
                        </div>
                        <div style={{ width: "150px", height: "150px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
                                alt="icon"
                                style={{ width: "80px", height: "80px", }}
                            />
                        </div>
                        <div style={{ width: "150px", height: "150px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
                                alt="icon"
                                style={{ width: "80px", height: "80px", }}
                            />
                        </div>
                        <div style={{ width: "150px", height: "150px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
                                alt="icon"
                                style={{ width: "80px", height: "80px", }}
                            />
                        </div>
                        <div style={{ width: "150px", height: "150px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
                                alt="icon"
                                style={{ width: "80px", height: "80px", }}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe