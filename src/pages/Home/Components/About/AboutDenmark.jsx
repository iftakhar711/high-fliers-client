// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import img1 from "../../../../image/denmark-1.jpg";
import img2 from "../../../../image/denmark-2.jpg";
import img3 from "../../../../image/denmark-3.jpg";
import img4 from "../../../../image/Animation - 1699976903375.json";
import "./AboutDenmark.css";

import Lottie from "lottie-react";

export default function AboutDenmark() {
  return (
    <>
      <div className="shine w-72 mx-auto  ">Study in Denmark</div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-[450px] md:w-[700px]  lg:h-[400px] lg:w-[1200px]  lg:px-6 items-center gap-4  mx-auto md:gap-8    ">
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

          <h1 className="z-20 font-bold font-mono group-hover:text-white delay-150 lg:text-base text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900  font-extrabold ">
              {" "}
              Name of the country:
            </span>{" "}
            Kingdom of Denmark.
          </h1>
          <h1 className="z-20 font-bold font-mono group-hover:text-white delay-150 lg:text-base text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900 font-extrabold ">
              {" "}
              Language:{" "}
            </span>{" "}
            Danish.
          </h1>
          <h1 className="z-20 font-bold font-mono group-hover:text-white delay-150 lg:text-base text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900 font-extrabold ">
              {" "}
              Number of universities:{" "}
            </span>{" "}
            8 universities & 9 universities of Applied Science.
          </h1>
          <h1 className="z-20 font-bold font-mono group-hover:text-white delay-150 lg:text-base text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900 font-extrabold ">
              {" "}
              IELTS requirement:{" "}
            </span>{" "}
            6.5 overall with a minimum of 6.0 in each band.
          </h1>
          <h1 className="z-20 font-semibold font-mono group-hover:text-white delay-150 lg:text-base text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900 font-extrabold ">
              {" "}
              Range of tuition fees:{" "}
            </span>{" "}
            Range from €6,000 to €16,000 per academic year.
          </h1>
        </div>
      </div>

      <div>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
            <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
              <div>
                <h5 className="max-w-md mb-6 text-xl font-extrabold leading-none sm:text-2xl uppercase text-[#be1f3e]">
                  Top universities in Denmark
                </h5>
                <p className=" text-base  text-gray-900 md:text-lg sm:mb-8 gap-6 grid">
                  <li>University of Copenhagen Denmark #82</li>
                  <li>Technical University of Denmark #104</li>
                  <li>Aarhus University Denmark #161</li>
                  <li>Aalborg University Denmark#330 </li>
                  <li>University of Southern Denmark #347</li>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
              <div>
                <p className=" text-sm md:text-base  text-justify font-medium text-gray-900 font-mono  ">
                  <span className="max-w-md text-lg font-extrabold leading-none uppercase text-[#be1f3e]">
                    Denmark is a highly
                  </span>{" "}
                  recommended destination for students who wish to pursue higher
                  education. The country boasts of top universities that offer a
                  wide range of programmes, from business and engineering to the
                  social sciences and humanities.
                  <br /> As an international student, you can expect Denmark to
                  be a welcoming and secure country with a high standard of
                  living and a strong social welfare system. Tuition fees in
                  Denmark are relatively low compared to other popular study
                  abroad destinations. Studying in Denmark offers a unique and
                  fulfilling experience that can lead to exciting career
                  opportunities and personal growth.
                  <br /> Whether you are interested in a bachelor’s, master’s,
                  or doctoral degree, Denmark is an excellent choice for your
                  higher education journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" grid mx-auto px-4 md:w-[1000px] justify-center sm:p-10">
        <h5 className=" mb-6 text-xl font-extrabold leading-none md:text-3xl mx-auto uppercase text-[#be1f3e] ">
          Top reasons to study in Denmark
        </h5>
        <p className="   text-gray-900 text-sm  md:text-base sm:mb-8 gap-2 grid">
          <li>
            Denmark offers many scholarships and tuition fee waivers for
            international students.
          </li>
          <li>
            International students can apply for permanent residence after
            graduating from a Danish university, and the process is generally
            considered straightforward. A continuous residence permit of eight
            years is typically required for permanent residency.
          </li>

          <li>
            International students can work up to 20 hours per week during their
            studies and full-time during holidays. However, work opportunities
            for spouses and children of international students are subject to
            certain restrictions.
          </li>

          <li>
            International students can apply to bring their spouses and children
            with them to Denmark. Spouses may be eligible for a work permit, and
            children may receive free education.
          </li>

          <li>
            After completing their studies, international students may be
            eligible for a post-study work permit of up to two years, depending
            on their qualifications and field of study.
          </li>

          <li>
            Denmark is a member of the Schengen Area, which allows visa-free
            travel to other member countries in Europe.
          </li>

          <li>
            Danish universities offer personalized career support to help
            students transition from university to the workforce.
          </li>

          <li>
            Denmark is ranked as the third-happiest country in the world,
            according to the World Happiness Report 2021.
          </li>

          <li>
            Denmark is ranked as the second-best country in the world for
            quality of life, according to the Quality of Life Index 2021.
          </li>

          <li>
            Copenhagen, the capital of Denmark, is ranked as the most livable
            city in the world, according to the Global Livability Index 2021.
          </li>
        </p>
      </div>
    </>
  );
}
