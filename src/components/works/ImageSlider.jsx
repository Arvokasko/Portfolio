import React, { useState, useEffect } from 'react';


const ImageSlider = () => {
    const gap = 20; // spacing between images
    const imageWidth = 600; // actual image width
    const visibleCount = 1;

    const baseAssetUrl = import.meta.env.BASE_URL;

    const originalImages = [
        { src: `${baseAssetUrl}assets/Screenshot 2025-11-07 121857.png`, link: 'https://geronimo.okol.org/~huhaar/keystone/' },
        { src: `${baseAssetUrl}assets/Screenshot 2025-11-07 134055.png`, link: 'https://geronimo.okol.org/~huhaar/KotkantienMaalaus/' },
    ];

    const images = [
        ...originalImages.slice(-visibleCount),
        ...originalImages,
        ...originalImages.slice(0, visibleCount),
    ];

    const [currentIndex, setCurrentIndex] = useState(visibleCount);
    const [transition, setTransition] = useState(true);

    const nextSlide = () => setCurrentIndex((prev) => prev + 1);
    const prevSlide = () => setCurrentIndex((prev) => prev - 1);

    useEffect(() => {
        if (currentIndex === images.length - visibleCount) {
            setTimeout(() => {
                setTransition(false);
                setCurrentIndex(visibleCount);
            }, 500);
        } else if (currentIndex === 0) {
            setTimeout(() => {
                setTransition(false);
                setCurrentIndex(images.length - visibleCount * 2);
            }, 500);
        } else {
            setTransition(true);
        }
    }, [currentIndex, images.length]);

    return (
        <div style={styles.wrapper}>
            <button onClick={prevSlide} style={styles.outsideButton}>❮</button>
            <div style={{
                ...styles.slider,
                width: `${visibleCount * (imageWidth + gap)}px`,
            }}>
                <div
                    style={{
                        ...styles.slides,
                        gap: `${gap}px`,
                        width: `${images.length * (imageWidth + gap)}px`,
                        transform: `translateX(-${currentIndex * (imageWidth + gap)}px)`,
                        transition: transition ? 'transform 0.5s ease-in-out' : 'none',
                    }}
                >
                    {images.map((img, index) => (
                        <a
                            key={index}
                            href={img.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.linkWrapper}
                        >
                            <img
                                src={`${img.src}?w=600&h=400`}
                                alt={`Slide ${index + 1}`}
                                style={styles.image}
                            />
                            <i style={{ position: "absolute", bottom: 0, margin: "25px 40px" }} className="fa fa-external-link-alt fa-2x"></i>
                        </a>
                    ))}
                </div>
            </div>
            <button onClick={nextSlide} style={styles.outsideButton}>❯</button>
        </div>
    );
};

const styles = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        margin: 'auto',
    },
    slider: {
        height: '400px',
        overflow: 'hidden',
        position: 'relative',
    },
    slides: {
        display: 'flex',
    },
    linkWrapper: {
        display: 'inline-block',
        textDecoration: 'none',
    },
    image: {
        width: '600px',
        height: '400px',
        objectFit: 'cover',
        borderRadius: "15px",
    },
    outsideButton: {
        fontSize: '48px',
        color: 'white',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        userSelect: 'none',
    },
};

export default ImageSlider;
