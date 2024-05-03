import styles from '../../public/styles/Slider.module.css';
import React, { useState, useEffect } from 'react';

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(goNext, 5000);

        return () => clearInterval(intervalId);
    }, [currentIndex, slides]);

    const goPrevious = () => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goNext = () => {
        const isLast = currentIndex === slides.length - 1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    const containerStyle = {
        height: "100%",
        position: "relative",
        transition: "height 0.5s ease",
    };
    const sliderStyle = {
        backgroundImage: `url(${slides[currentIndex].url})`,
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "background-image 0.5s ease",
    };

    return (
        <div style={containerStyle}>
            <div className={styles.leftArrow} onClick={goPrevious}>❮</div>
            <div style={sliderStyle} className={styles.container}></div>
            <div className={styles.rightArrow} onClick={goNext}>❯</div>
            <div className={styles.navigation}>{slides.map((slide, slideIndex) => (
                <div 
                key={slideIndex}
                className={`${styles.dot} ${slideIndex === currentIndex ? styles.activeDot : ''}`}
                onClick={() => goToSlide(slideIndex)}>
                    ⦿
                </div>
            ))}</div>
        </div>
    );
};

export default Slider