import React, { useState, useRef, useEffect } from 'react';

const ImageSlider = () => {
    const originalImages = [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759',
        'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        'https://geronimo.okol.org/~huhaar/keystone/images/dillon-kydd-SHXCj2Syo7c-unsplash.jpg',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    ];

    const visibleCount = 3;
    const imageWidth = 600;

    const images = [
        ...originalImages.slice(-visibleCount),
        ...originalImages,
        ...originalImages.slice(0, visibleCount),
    ];

    const [currentIndex, setCurrentIndex] = useState(visibleCount);
    const [transition, setTransition] = useState(true);

    const nextSlide = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => prev - 1);
    };

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
            <div style={styles.slider}>
                <div
                    style={{
                        ...styles.slides,
                        width: `${images.length * imageWidth}px`,
                        transform: `translateX(-${currentIndex * imageWidth}px)`,
                        transition: transition ? 'transform 0.5s ease-in-out' : 'none',
                    }}
                >
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={`${src}?w=600&h=400`}
                            alt={`Slide ${index + 1}`}
                            style={styles.image}
                        />
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
        width: '1800px',
        height: '400px',
        overflow: 'hidden',
        position: 'relative',
    },
    slides: {
        display: 'flex'
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