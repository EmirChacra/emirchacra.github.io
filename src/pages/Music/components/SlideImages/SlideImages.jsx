import './SlideImages.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function SlideImages({ data, onSlideChange }) {
    const showElements = () => {
        return data.map((item, index) => {
            return (
                <SwiperSlide key={index}>
                    <img className="img-slider" src={item.img} alt="cover" />
                </SwiperSlide>
            )
        })
    }

    return (
        <div className="slide-images">

            <Swiper
                modules={[EffectCoverflow, Pagination]}
                spaceBetween={0}
                loop={false}
                slidesPerView={3}
                effect={'coverflow'}
                initialSlide={0}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 400,
                    modifier: 1,
                    slideShadows: false,
                }}
                centeredSlides={'auto'}
                onSlideChange={(swiper) => onSlideChange(swiper)}
            // onSwiper={(swiper) => console.log(swiper)}
            // pagination={{ clickable: true }}
            >
                {showElements()}
            </Swiper>
        </div >
    );
}

export default SlideImages;