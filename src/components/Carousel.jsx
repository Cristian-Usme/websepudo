import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

function Carousel() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src="https://swiperjs.com/demos/images/1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://swiperjs.com/demos/images/1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://swiperjs.com/demos/images/1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://swiperjs.com/demos/images/1.jpg" alt="" /></SwiperSlide>
            ...
        </Swiper>
    );
}

export default Carousel;