import React from 'react'
import Icons from "./Icons";
import useScrollAnimation from '../../hooks/useScrollAnimation';


const AboutMe = () => {
    const titleRef = useScrollAnimation({ threshold: 0.1 });
    const contentRef = useScrollAnimation({ threshold: 0.1 });
    const iconsRef = useScrollAnimation({ threshold: 0.1 });

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
            <h1 ref={titleRef} className='scroll-animate animate-fade'>
                About me
            </h1>
            <div ref={contentRef} style={{ maxWidth: "1000px", width: "90%", overflowWrap: "break-word" }} className='scroll-animate animate-slide-up'>

                <p>
                    I'm a passionate website developer currently in my second year of professional experience, based in Oulu, Finland. With a strong foundation in front-end and back-end technologies, I specialize in creating responsive, user-friendly websites that blend functionality with clean design. My journey in web development has been driven by curiosity, continuous learning, and a commitment to delivering high-quality digital experiences.
                </p>

                <div>
                    <div ref={iconsRef} className='scroll-animate-group' style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>

                        <Icons iconClass="fab fa-html5 fa-4x" />
                        <Icons iconClass="fab fa-css3 fa-4x" />
                        <Icons iconClass="fab fa-js fa-4x" />
                        <Icons iconClass="fab fa-php fa-4x" />
                        <Icons iconClass="fab fa-python fa-4x" />
                        <Icons iconClass="fab fa-wordpress fa-4x" />
                        <Icons iconClass="fab fa-microsoft fa-4x" />
                        <Icons iconClass="fab fa-adobe fa-4x" />
                        <Icons iconClass="fab fa-github fa-4x" />
                        <Icons iconClass="fab fa-react fa-4x" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe