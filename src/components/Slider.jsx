import styles from '../../public/styles/Slider.module.css';
import { useState } from 'react';

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
    };
    const sliderStyle = {
        backgroundImage: `url(${slides[currentIndex].url})`,
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        backgroundPosition: "center",
        backgroundSize: "cover",
    };

    return (
        <div style={containerStyle}>
            <div className={styles.leftArrow} onClick={goPrevious}>❮</div>
            <div style={sliderStyle} className={styles.container}></div>
            <div className={styles.rightArrow} onClick={goNext}>❯</div>
            <div className={styles.dotsList}>{slides.map((slide, slideIndex) => (
                <div 
                key={slideIndex}
                className={styles.dot}
                onClick={() => goToSlide(slideIndex)}>
                    ⦿
                </div>
            ))}</div>
        </div>
    );
};

export default Slider