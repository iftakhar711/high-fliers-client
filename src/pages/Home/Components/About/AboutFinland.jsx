// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import img1 from "../../../../image/finland-1.jpg";
import img2 from "../../../../image/finland-2.jpg";
import img3 from "../../../../image/finland-3.jpg";
import img4 from "../../../../image/Animation - 1699976701627.json";
import "./AboutFinland.css";

import Lottie from "lottie-react";

export default function AboutFinland() {
  return (
    <>
      <div className="shine w-64 mx-auto  ">Study in Finland</div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-[450px] md:w-[700px]  lg:h-[400px] lg:w-[1200px]  lg:px-6 items-center  mx-auto md:gap-8    ">
        <div>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper h-[300px]   "
          >
            <SwiperSlide>
              <img className="w-full lg:h-[300px] " src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full lg:h-[300px] " src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full lg:h-[300px] " src={img3} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* card */}
        <div className=" h-auto lg:w-[600px] md:w-[600px] w-full bg-white m-auto rounded-[1em] relative group p-2 z-0 grid gap-2 overflow-hidden">
          <div className="z-[-1] h-full w-[200%] rounded-[1em] bg-gradient-to-br bg-sky-500 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[300%] duration-500 origin-bottom-right"></div>

          <h1 className="z-20 font-bold font-Poppin group-hover:text-white delay-150 ">
            <Lottie animationData={img4} className="w-24 h-24"></Lottie>
          </h1>

          <h1 className="z-20 font-bold font-mono group-hover:text-white delay-150 lg:text-lg text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900  font-extrabold ">
              {" "}
              Name of the country:
            </span>{" "}
            Republic of Finland.
          </h1>
          <h1 className="z-20 font-bold font-mono group-hover:text-white delay-150 lg:text-lg text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900 font-extrabold ">
              {" "}
              Language:{" "}
            </span>{" "}
            Finnish.
          </h1>
          <h1 className="z-20 font-bold font-mono group-hover:text-white delay-150 lg:text-lg text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900 font-extrabold ">
              {" "}
              Number of universities:{" "}
            </span>{" "}
            13 universities & 22 universities of Applied science.
          </h1>
          <h1 className="z-20 font-bold font-mono group-hover:text-white delay-150 lg:text-lg text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900 font-extrabold ">
              {" "}
              IELTS requirement:{" "}
            </span>{" "}
            6 – 6.5 (not less than 5.5).
          </h1>
          <h1 className="z-20 font-semibold font-mono group-hover:text-white delay-150 lg:text-lg text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900 font-extrabold ">
              {" "}
              Range of tuition fees:{" "}
            </span>{" "}
            €5,000 to €18,000 per academic year.
          </h1>
        </div>
      </div>

      <div>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
            <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
              <div>
                <h5 className="max-w-md mb-6 text-xl font-extrabold leading-none sm:text-2xl uppercase text-[#27397c]">
                  Top universities in Finland
                </h5>
                <p className=" text-base  text-gray-900 md:text-lg sm:mb-8 gap-6">
                  <li>University of Helsinki #106</li>
                  <li>Aalto University #116</li>
                  <li>University of Turku #291</li>
                  <li>University of Jyväskylä #347 </li>
                  <li>University of Oulu #392</li>
                  <li>Tampere University #415</li>
                  <li>Lappeenranta-Lahti University of Technology LUT #388</li>
                  <li>University of Eastern Finland #551-#560</li>
                  <li>Åbo Akademi University #601-#650</li>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
              <div>
                <p className=" text-sm md:text-base  text-justify font-medium text-gray-900 font-mono  ">
                  <span className="max-w-md text-lg font-extrabold leading-none uppercase text-[#27397c]">
                    If you are a student
                  </span>{" "}
                  who wants to pursue higher education, Finland is a destination
                  to consider. In addition, Finland is home to many top
                  universities offering a wide range of programmes, from
                  business and engineering to the social sciences and
                  humanities. <br />
                  As an international student, you will find Finland to be a
                  friendly and safe country with a high standard of living and a
                  strong social welfare system. Tuition fees in Finland are
                  relatively low compared to other popular study abroad
                  destinations.
                  <br /> Studying in Finland offers a unique and rewarding
                  experience that can open up exciting career opportunities and
                  personal growth. Whether you want to pursue a bachelor`s,
                  master’s or doctoral degree, Finland is definitely worth
                  considering as a destination for your higher education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" grid mx-auto px-4 md:w-[1000px] justify-center">
        <h5 className=" mb-6 text-xl font-extrabold leading-none md:text-3xl mx-auto uppercase text-[#27397c] ">
          Top reasons to study in Finland
        </h5>
        <p className="   text-gray-900 text-sm  md:text-lg sm:mb-8 gap-2 grid">
          <li>Lots of scholarships and tuition fee waiver opportunities.</li>
          <li>
            Easy process for permanent residence. Permanent residence in just
            four years with a continuous residence permit.
          </li>

          <li>
            Per week 30 hours work Opportunity. Full-time work opportunity
            during the holidays.
          </li>

          <li>
            Students can apply with spouse & children, the spouse will have a
            full-time work permit, and children will get free schooling
            facilities during the study.
          </li>

          <li>
            After completing the study, students will get a post-study work
            permit for two years.
          </li>

          <li>No need for police clearance or medical.</li>

          <li>Finland is a member of the Schengen.</li>

          <li>Personalized career support from Universities.</li>

          <li>
            Live in the most peaceful and sustainable country in the world
            according to the Global Peace Index 2021 and Sustainable Development
            Report 2021 respectively.
          </li>

          <li>
            Study in the best higher education and training system in the world
            according to the World Economic Forum 2021.
          </li>
        </p>
      </div>
    </>
  );
}
