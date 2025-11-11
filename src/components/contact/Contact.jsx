import React from 'react'
import LinkIcons from './LinkIcons';


const Contact = () => {
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
            <div style={{ maxWidth: "1000px", width: "90%", overflowWrap: "break-word" }}>

                <div>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>

                        <LinkIcons iconClass="fa fa-envelope fa-4x" linkUrl="mailto:aaron.huhtala08@gmail.com" />
                        <LinkIcons iconClass="fa fa-phone fa-4x" linkUrl="tel:+358404195413" />
                        <LinkIcons iconClass="fab fa-github fa-4x" linkUrl="https://github.com/arvokasko" />
                        <LinkIcons iconClass="fab fa-whatsapp fa-4x" linkUrl="https://wa.me/0404195413" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact