
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../../public/styles/Carousel.module.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 4500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Velocidad de autoplay en milisegundos
    };

    return (
        <div className={styles.Carousel}>
            <h2 >Carousel con Autoplay</h2>
            <Slider {...settings}>
                <div>
                    <h3>Slide 1</h3>
                </div>
                <div>
                    <h3>Slide 2</h3>
                </div>
                <div>
                    <h3>Slide 3</h3>
                </div>
                <div>
                    <h3>Slide 4</h3>
                </div>
                <div>
                    <h3>Slide 5</h3>
                </div>
                <div>
                    <h3>Slide 6</h3>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
