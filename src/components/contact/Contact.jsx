import React from 'react'

const AboutMe = () => {
    return (
        <div id='contact'
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <h1>
                Contact me
            </h1>
            <div style={{ maxWidth: "1000px", width: "100%", overflowWrap: "break-word" }}>

                <div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>

                        <div style={{ width: "150px", height: "150px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <a href="mailto:aaron.huhtala08@gmail.com" target='_blank'>
                                <i class="fa fa-envelope fa-4x"></i>
                            </a>
                        </div>
                        <div style={{ width: "150px", height: "150px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <a href="tel:+358404195413" target='_blank'>
                                <i class="fa fa-phone fa-4x"></i>
                            </a>
                        </div>
                        <div style={{ width: "150px", height: "150px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <a href="https://github.com/arvokasko" target='_blank'>
                                <i class="fab fa-github fa-4x"></i>
                            </a>
                        </div>
                        <div style={{ width: "150px", height: "150px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <a href="https://wa.me/0404195413" target='_blank'>
                                <i class="fab fa-whatsapp fa-4x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe