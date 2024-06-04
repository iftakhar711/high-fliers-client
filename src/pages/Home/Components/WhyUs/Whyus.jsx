import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./Whyus.css";

import { Pagination } from "swiper/modules";

import Lottie from "lottie-react";
import img1 from "../../../../image/chart.json";
import img2 from "../../../../image/Animation - 1699980007811.json";
import img3 from "../../../../image/Animation - 1699982098279.json";
import img4 from "../../../../image/Animation - 1699982494936.json";
import img5 from "../../../../image/Animation - 1699982767102.json";
import img6 from "../../../../image/Animation - 1699982991829.json";

const Whyus = () => {
  return (
    <div className=" mb-32  ">
      {/* headline */}
      <div className=" grid  justify-center">
        <h1 className=" text-3xl lg:text-4xl font-extrabold">WHY US!</h1>
      </div>
      {/* description */}
      <div className="grid  justify-center ">
        <h1 className=" text-xs mt-2">
          Why will you choose High-Flyers Global Education
        </h1>
      </div>

      {/* slider */}
      <div className=" mt-32 ">
        <Swiper
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper  h-[300px]  w-[400px] md:w-[800px]  lg:h-[300px] lg:w-[1200px] "
        >
          <SwiperSlide>
            <div className="grid justify-center">
              <Lottie className=" h-36 w-48" animationData={img1}></Lottie>
              {/* <PiWineDuotone className='  text-xl  text-cyan-500'></PiWineDuotone> */}
            </div>

            <h1 className="  font-medium  text-center ">
              We only accept clients if they meet all the admission
              requirements, it help us to retain our high rate success.
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="grid justify-center">
              <Lottie className=" h-32 w-48" animationData={img2}></Lottie>
              {/* <PiWineDuotone className='  text-xl  text-cyan-500'></PiWineDuotone> */}
            </div>
            <h1 className="  font-bold text-lg  text-center mt-4 ">
              We can Provide bank statment support.
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="grid justify-center">
              <Lottie className=" h-36 w-48" animationData={img3}></Lottie>
              {/* <PiWineDuotone className='  text-xl  text-cyan-500'></PiWineDuotone> */}
            </div>
            <h1 className=" font-bold text-lg  text-center">
              We are Officially Representative <br /> of 50+ Universities and
              Collages <br /> in The world.
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="grid justify-center">
              <Lottie className=" h-36 w-48" animationData={img4}></Lottie>
            </div>
            <h1 className=" font-bold text-lg  text-center">
              We are Highly Dedicated, Experienced and Commited.
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="grid justify-center">
              <Lottie className=" h-36 w-48" animationData={img5}></Lottie>
            </div>
            <h1 className=" font-bold text-lg  text-center">
              We Provide Interview <br /> Assistance.
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="grid justify-center">
              <Lottie className=" h-36 w-48" animationData={img6}></Lottie>
            </div>
            <h1 className=" font-bold text-lg  text-center">
              Help to Acquire <br /> Scholarships.
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Whyus;
