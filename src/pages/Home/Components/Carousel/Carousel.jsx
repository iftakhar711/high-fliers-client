import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay,  Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <div>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mb-4 lg:h-fit "
      >
        <SwiperSlide className=''> <img src="https://i.ibb.co/6bgTgZW/denmark1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className=' ' src="https://i.ibb.co/vvtfmxj/finland1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className=' ' src="https://i.ibb.co/thNg9VZ/china1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className=' ' src="https://i.ibb.co/qjK7xgd/dreams.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel