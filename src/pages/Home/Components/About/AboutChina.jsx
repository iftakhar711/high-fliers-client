// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import img1 from "../../../../image/china-university-1.jpg";
import img2 from "../../../../image/china-university-2.png";
import img3 from "../../../../image/china-university-3.png";
import img4 from "../../../../image/Animation - 1699976388897.json";
import "./AboutChina.css";

import Lottie from "lottie-react";

export default function AboutChina() {
  return (
    <>
      <div className="shine w-60 mx-auto ">Study in China</div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-[450px] md:w-[700px]  lg:h-[400px] lg:w-[1200px]  lg:px-6 items-center  mx-auto md:gap-6    ">
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
        <div className=" h-auto lg:w-[500px] md:w-[500px] w-full bg-white m-auto rounded-[1em] relative group p-2 z-0 grid gap-2 overflow-hidden">
          <div className="z-[-1] h-full w-[200%] rounded-[1em] bg-gradient-to-br bg-sky-500 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[300%] duration-500 origin-bottom-right"></div>

          <h1 className="z-20 font-bold font-Poppin group-hover:text-white delay-150 ">
            <Lottie animationData={img4} className="w-24 h-24"></Lottie>
          </h1>

          <h1 className="z-20 font-bold font-mono group-hover:text-white delay-150 lg:text-lg text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900  font-extrabold ">
              {" "}
              Name of the country:
            </span>{" "}
            People’s Republic of China.
          </h1>
          <h1 className="z-20 font-bold font-mono group-hover:text-white delay-150 lg:text-lg text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900 font-extrabold ">
              {" "}
              Language:{" "}
            </span>{" "}
            Standard Chinese.
          </h1>
          <h1 className="z-20 font-bold font-mono group-hover:text-white delay-150 lg:text-lg text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900 font-extrabold ">
              {" "}
              Number of universities:{" "}
            </span>{" "}
            1,239 universities.
          </h1>
          <h1 className="z-20 font-bold font-mono group-hover:text-white delay-150 lg:text-lg text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900 font-extrabold ">
              {" "}
              IELTS requirement:{" "}
            </span>{" "}
            6.0 or higher.
          </h1>
          <h1 className="z-20 font-semibold font-mono group-hover:text-white delay-150 lg:text-lg text-sm">
            <span className=" text-rose-700 group-hover:text-slate-900 font-extrabold ">
              {" "}
              Range of tuition fees:{" "}
            </span>{" "}
            Approximately 2,500 to 4,000 USD per year.
          </h1>
        </div>
      </div>

      <div>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
            <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
              <div>
                <h5 className="max-w-md mb-6 text-xl font-extrabold leading-none sm:text-2xl uppercase text-red-700">
                  Top ten university in china
                </h5>
                <p className=" text-base  text-gray-900 md:text-lg sm:mb-8 gap-6">
                  <li>Tsinghua University</li>
                  <li>Peking University</li>
                  <li>Fudan University</li>
                  <li>Shanghai Jiao Tong University </li>
                  <li>Zhejiang University</li>
                  <li>University of Science and Technology of China (USTC)</li>
                  <li>Nanjing University</li>
                  <li>Sun Yat-sen University </li>
                  <li>Huazhong University of Science and Technology (HUST)</li>
                  <li>Xian Jiaotong University</li>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
              <div>
                <p className=" text-sm text-justify font-medium text-gray-900 font-mono  ">
                  <span className="max-w-md text-lg font-extrabold leading-none uppercase text-red-700">
                    As an international
                  </span>{" "}
                  student in China, you will find a welcoming environment
                  coupled with a rich cultural experience. China has a rich
                  history, emphasis on education and innovation has led to
                  significant investments in infrastructure and research
                  facilities, providing students with access to state-of-the-art
                  resources and opportunities for academic and professional
                  growth. <br />
                  Moreover, China boasts a vibrant and dynamic society, offering
                  a blend of traditional values and modernity. With its rapidly
                  growing economy and global influence, studying in China can
                  provide invaluable insights and connections for future career
                  endeavors. Additionally, the cost of tuition and living
                  expenses in China is comparatively affordable, making it an
                  attractive option for students seeking quality education
                  without breaking the bank. <br /> Overall, studying in China
                  offers a unique blend of academic excellence, cultural
                  immersion, and global opportunities, making it a compelling
                  choice for students aspiring for higher education. Whether you
                  are pursuing a bachelors, masters, or doctoral degree, China
                  presents a plethora of possibilities for personal and
                  professional development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" grid mx-auto px-4 md:w-[900px] justify-center">
        <h5 className=" mb-6 text-xl font-extrabold leading-none md:text-3xl mx-auto uppercase text-red-700 ">
          Top reasons to study in china
        </h5>
        <p className="   text-gray-900 text-sm md:text-base sm:mb-8 gap-2 grid">
          <li>
            <span className=" text-red-800 font-extrabold font-mono ">
              High-Quality Education:{" "}
            </span>{" "}
            China boasts numerous world-class universities with excellent
            academic programs.
          </li>
          <li>
            <span className=" text-red-800 font-extrabold font-mono ">
              Affordable Tuition Fees:{" "}
            </span>{" "}
            The cost of fees in China is relatively low compared to other
            countries.
          </li>

          <li>
            <span className=" text-red-800 font-extrabold font-mono ">
              {" "}
              Scholarship Opportunities:{" "}
            </span>{" "}
            The Chinese government and various universities offer a wide range
            of scholarships to international students.
          </li>

          <li>
            <span className=" text-red-800 font-extrabold font-mono ">
              {" "}
              Cultural Experience:{" "}
            </span>{" "}
            Studying in China provides a unique opportunity to immerse yourself
            in a rich culture.
          </li>

          <li>
            <span className=" text-red-800 font-extrabold font-mono ">
              {" "}
              Language Learning:{" "}
            </span>{" "}
            Living in China is an excellent way to learn Mandarin, one of the
            most spoken languages.
          </li>

          <li>
            <span className=" text-red-800 font-extrabold font-mono ">
              {" "}
              Economic Opportunities:{" "}
            </span>{" "}
            China is one of the world’s largest economies, offering numerous
            opportunities.
          </li>

          <li>
            <span className=" text-red-800 font-extrabold font-mono ">
              {" "}
              Innovative Research and Technology:{" "}
            </span>{" "}
            China is a global leader in various fields of research and
            technology.
          </li>
          <li>
            <span className=" text-red-800 font-extrabold font-mono ">
              {" "}
              Global Recognition:{" "}
            </span>{" "}
            Degrees from top Chinese universities are recognized worldwide.
          </li>

          <li>
            <span className=" text-red-800 font-extrabold font-mono ">
              {" "}
              Diverse Student Community:{" "}
            </span>{" "}
            China attracts students from all over the world.
          </li>
        </p>
      </div>
    </>
  );
}
