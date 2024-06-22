import { useState, useEffect } from 'react';
import styles from '../../public/styles/Slider.module.css';


const Slider = ({ slides = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        }, currentIndex === 0 ? 9000 : 4000);  // Intervalo de 8 segundos para el primer slide, 4 segundos para los demás

        return () => clearInterval(intervalId);
    }, [slides, currentIndex]);

    const goPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className={styles.slider}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : ''}`}
                    style={{
                        backgroundImage: `url(${slide.url})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    {index === 0 ? (
                        <div className={styles.firstSlideContent}>
                            <img src={slide.url} alt={slide.title} className={styles.firstImage} />
                            <div className={styles.textSlider}>
                                <h1 className={styles.title}>Bienvenidos</h1>
                                <p className={styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                                </p>
                            </div>
                        </div>
                    ) : null}
                </div>
            ))}
            <div className={styles.navigation}>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        className={`${styles.dot} ${slideIndex === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ⦿
                    </div>
                ))}
            </div>
            <div className={styles.arrows}>
                <div className={styles.leftArrow} onClick={goPrevious}>❮</div>
                <div className={styles.rightArrow} onClick={() => setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))}>❯</div>
            </div>
        </div>
    );
};

export default Slider;
