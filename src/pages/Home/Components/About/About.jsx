import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// import img from '../../../../image/img.jpg'
import Lottie from "lottie-react";

import img1 from "../../../../image/Animation - 1699976388897.json";
import img2 from "../../../../image/Animation - 1699976701627.json";
import img3 from "../../../../image/Animation - 1699976903375.json";
import { Link } from "react-router-dom";

const About = () => {
  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[400px] md:w-[800px]  lg:h-[400px] lg:w-[1200px] mt-20 justify-between mx-auto gap-8 mb-4">
      <div className=" text-justify">
        <h1 className=" font-bold  text-xl mt-3 mb-2 ">Who are we ?</h1>

        <span className=" text-lg ">
          High Flyers Global Education is an education consultancy brand, we are
          continuously working on it to promote its image, established with the
          moto of helping students get admission in the top universities of the
          world. It has started its journey since long and ever since it has
          worked with several students with a 99% success rate.We help students
          to full fill their dream, achive their goal and high fly to their
          target.
        </span>

        {/* <span className='text-lg '>established with the moto of helping students get admission in the top universities of the world. It has started its journey since long and ever since it has worked with several students with a 99% success rate.We help students to full fill their dream, achive their goal and high fly to their target. </span> */}
      </div>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-300px md:h-72 lg:h-72 mb-4"
        >
          {/* <SwiperSlide> <img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide> */}
          <SwiperSlide>
            <div className="flex flex-col items-center pb-10">
              <Lottie className="w-24 h-24 mb-2 " animationData={img1}></Lottie>
              <h5 className="mb-1 text-base md:text-lg lg:text-2xl font-normal text-gray-900  px-20  text-center">
                {/* Population: 1.393 billion */}
                Capital: Beijing {/* Currency: Renminbi */}
              </h5>
              <span className=" text-xl text-gray-800 font-bold mt-1">
                CHINA
              </span>
              <Link to={"/aboutchina"}>
                <button
                  onClick={top}
                  className="overflow-hidden mt-4 w-32  h-10 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                >
                  Explore!
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute  left-8 z-10">
                    More!
                  </span>
                </button>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center pb-10">
              <Lottie className="w-24 h-24 mb-2 " animationData={img2}></Lottie>
              <h5 className="mb-1 text-base md:text-lg lg:text-2xl font-normal text-gray-900  px-20 mt-1 text-center">
                {/* Population: 5.56 million */}
                Capital: Helsinki {/* Currency: Euro */}
              </h5>
              <span className="text-xl text-gray-800 font-bold mt-1 ">
                FINLAND
              </span>
              <Link to={"/aboutfinland"}>
                <button
                  onClick={top}
                  className="overflow-hidden mt-4 w-32  h-10 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                >
                  Explore!
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute  left-8 z-10">
                    More!
                  </span>
                </button>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center pb-10">
              <Lottie className="w-24 h-24 mb-2 " animationData={img3}></Lottie>
              <h5 className="mb-1 text-base md:text-lg lg:text-2xl font-normal text-gray-900  px-20 mt-1 text-center">
                Capital: Copenhagen
              </h5>
              <span className="text-xl text-gray-800 font-bold mt-1  ">
                DENMARK
              </span>
              <Link to={"/aboutdanmark"}>
                <button
                  onClick={top}
                  className="overflow-hidden mt-4 w-32  h-10 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                >
                  Explore!
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute  left-8 z-10">
                    More!
                  </span>
                </button>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
