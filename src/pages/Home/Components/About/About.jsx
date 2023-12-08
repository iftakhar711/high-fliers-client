
import {FcAbout} from 'react-icons/fc'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

// import img from '../../../../image/img.jpg'
import Lottie from 'lottie-react';

import img1 from '../../../../image/Animation - 1699976388897.json'
import img2 from '../../../../image/Animation - 1699976701627.json'
import img3 from '../../../../image/Animation - 1699976903375.json'
import img4 from '../../../../image//Animation - 1699978890670.json'

const About = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[400px] md:w-[800px]  lg:h-[400px] lg:w-[1200px] mt-20 justify-between mx-auto gap-8 mb-4'>
        <div className=' text-justify'>
          
            <h1 className=' font-bold  text-xl mt-3 mb-2 '>Who are we ?</h1>
       
            
            
              <span className=' text-lg '> 
                High Flyers Global Education is an education consultancy brand, we are continuously working on it to promote its image, established with the moto of helping students get admission in the top universities of the world. It has started its journey since long and ever since it has worked with several students with a 99% success rate.We help students to full fill their dream, achive their goal and high fly to their target. 
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
        <Lottie className='w-24 h-24 mb-2 ' animationData={img1}></Lottie>
        <h5 className="mb-1 text-base md:text-lg lg:text-2xl font-normal text-gray-900  px-20 mt-1 text-center">Population: 1.393 billion <br /> Capital: Beijing <br /> Currency: Renminbi</h5>
        <span className="text-sm text-gray-600 font-bold mt-4">CHINA</span>
    </div>

        </SwiperSlide>

        <SwiperSlide>

    <div className="flex flex-col items-center pb-10">
        <Lottie className='w-24 h-24 mb-2 ' animationData={img2}></Lottie>
        <h5 className="mb-1 text-base md:text-lg lg:text-2xl font-normal text-gray-900  px-20 mt-1 text-center">Population: 5.56 million <br /> Capital: Helsinki <br /> Currency: Euro</h5>
        <span className="text-sm text-gray-600 font-bold mt-4 ">FINLAND</span>
    </div>

        </SwiperSlide>
        
        <SwiperSlide>

    <div className="flex flex-col items-center pb-10">
        <Lottie className='w-24 h-24 mb-2 ' animationData={img3}></Lottie>
        <h5 className="mb-1 text-base md:text-lg lg:text-2xl font-normal text-gray-900  px-20 mt-1 text-center">Population: 5.806 million <br /> Capital: Copenhagen <br /> Currency: Danish Krone</h5>
        <span className="text-sm text-gray-500 font-bold mt-4 ">DENMARK</span>
    </div>

        </SwiperSlide>
        
    
      </Swiper>
        </div>
    </div>
  )
}

export default About