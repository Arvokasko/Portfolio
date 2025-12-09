import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
    const gap = 20;
    const ANIMATION_DURATION = 300;

    const originalImages = [
        {
            src: `assets/Screenshot 2025-11-07 121857.png`,
            link: 'https://geronimo.okol.org/~huhaar/keystone/',
            title: 'Keystone',
            description: 'A modern web application with clean design and intuitive navigation.',
        },
        {
            src: `assets/Screenshot 2025-11-07 134055.png`,
            link: 'https://geronimo.okol.org/~huhaar/KotkantienMaalaus/',
            title: 'Kotkantien Maalaus',
            description: 'Professional painting service website with portfolio showcase.',
        },
        {
            src: `assets/Screenshot 2025-11-07 134055.png`,
            link: 'https://geronimo.okol.org/~huhaar/KotkantienMaalaus/',
            title: 'Kotkantien Maalaus',
            description: 'Professional painting service website with portfolio showcase.',
        },
    ];

    const [containerWidth, setContainerWidth] = useState(window.innerWidth);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [transition, setTransition] = useState(true);
    const isAnimatingRef = useRef(false);
    const transitionTimeoutRef = useRef(null);

    // Calculate visible count based on viewport width
    const getVisibleCount = useCallback(() => {
        if (containerWidth < 1400) return 1;
        if (containerWidth < 2000) return 2;
        return 3;
    }, [containerWidth]);

    const visibleCount = getVisibleCount();

    // Create an infinitely looping array
    const images = [
        originalImages[originalImages.length - 1],
        ...originalImages,
        originalImages[0],
    ];

    // Handle slide transition
    const handleSlideChange = useCallback((newIndex) => {
        if (isAnimatingRef.current) return;

        isAnimatingRef.current = true;
        setTransition(true);
        setCurrentIndex(newIndex);

        // Clear any existing timeout
        if (transitionTimeoutRef.current) {
            clearTimeout(transitionTimeoutRef.current);
        }

        // Handle wrapping after animation completes
        transitionTimeoutRef.current = setTimeout(() => {
            setTransition(false);

            // Wrap around to the beginning
            if (newIndex >= originalImages.length + 1) {
                setCurrentIndex(1);
            }
            // Wrap around to the end
            else if (newIndex <= 0) {
                setCurrentIndex(originalImages.length);
            }

            isAnimatingRef.current = false;
        }, ANIMATION_DURATION);
    }, [originalImages.length]);

    const nextSlide = useCallback(() => {
        handleSlideChange(currentIndex + 1);
    }, [currentIndex, handleSlideChange]);

    const prevSlide = useCallback(() => {
        handleSlideChange(currentIndex - 1);
    }, [currentIndex, handleSlideChange]);

    // Update width on resize
    useEffect(() => {
        const handleResize = () => setContainerWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isAnimatingRef.current) return;
            if (e.key === 'ArrowRight') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current);
            }
        };
    }, []);

    // Responsive image width (max 600px, min 90% of viewport)
    const imageWidth = Math.min(600, containerWidth * 0.9);
    const isAnimating = isAnimatingRef.current;

    return (
        <div className="slider-container">
            <div className="slider-wrapper">
                <div
                    className="slider-track"
                    style={{
                        width: `${visibleCount * (imageWidth + gap)}px`,
                    }}
                >
                    <div
                        className="slider-slides"
                        style={{
                            gap: `${gap}px`,
                            width: `${images.length * (imageWidth + gap)}px`,
                            transform: `translateX(-${currentIndex * (imageWidth + gap)}px)`,
                            transition: transition ? `transform ${ANIMATION_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1)` : 'none',
                        }}
                    >
                        {images.map((img, index) => (
                            <a
                                key={index}
                                href={img.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="slider-card"
                                style={{ width: `${imageWidth}px` }}
                            >
                                <div className="slider-image-container">
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className="slider-image"
                                    />
                                    <div className="slider-link-icon">
                                        <i className="fa fa-external-link-alt fa-lg"></i>
                                    </div>
                                </div>
                                <div className="slider-card-content">
                                    <h3 className="slider-card-title">{img.title}</h3>
                                    <p className="slider-card-description">{img.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="slider-button-container">
                <button
                    onClick={prevSlide}
                    disabled={isAnimating}
                    className="slider-bottom-button"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    disabled={isAnimating}
                    className="slider-bottom-button"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
