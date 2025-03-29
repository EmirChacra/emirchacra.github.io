import './SlideImages.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import earlyRiser from "../../../../assets/album_covers/earlyRiser_cover.jpg";

function SlideImages(data) {
    return (
        <div className="slide-images">

            <Swiper
                modules={[EffectCoverflow, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                centeredSlides={'auto'}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
            >
                <SwiperSlide><img src={earlyRiser} alt="cover" /></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div >
    );
}

export default SlideImages;