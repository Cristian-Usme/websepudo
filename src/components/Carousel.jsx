import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../../public/styles/Carousel.module.css';

function Carousel({ slides }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 4500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          {slides.map((event) => (
            <div>
              <section className={styles.thumbnails}>
                <img className={styles.image} alt="img" src={event.img}/>
                <h2 className={styles.title}>{event.artist}</h2>
                <h3 className={styles.city}>{event.city}</h3>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;