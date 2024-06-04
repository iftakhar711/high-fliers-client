import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

// import img from "../../../../image/slider-4.png";
import img1 from "../../../../image/finland poster.png";
import img2 from "../../../../image/USA.png";

const Carousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mb-4  "
      >
        {/* <SwiperSlide>
          <img className="w-full lg:h-[750px]" src={img} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img className="w-full lg:h-[750px]" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full lg:h-[750px]" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full lg:h-[750px]"
            src="https://i.ibb.co/6bgTgZW/denmark1.jpg"
            alt=""
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            className="w-full lg:h-[750px]"
            src="https://i.ibb.co/vvtfmxj/finland1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full lg:h-[750px]"
            src="https://i.ibb.co/thNg9VZ/china1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full lg:h-[750px]"
            src="https://i.ibb.co/qjK7xgd/dreams.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
