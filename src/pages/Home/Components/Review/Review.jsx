import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel} from 'swiper/modules';

const Review = () => {
  return (
    <>
    <h1 className=' grid text-3xl lg:text-4xl font-extrabold justify-center text-center '>WHAT PEOPLE SAY ABOUT US!</h1>

 <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
      
        modules={[Mousewheel]}
        className="mySwiper h-96 grid items-center "
      >
    <SwiperSlide>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
        29 Nov 2023
      </p>
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
       
        <p className="text-base text-gray-700 md:text-lg">
          The High Flyers was great to work with providing us with a future road map to meet our expansion goals. They provided great service and kept us on track with ongoing initiatives and opportunities.
        </p>
      </div>
      <div className="mb-10 sm:text-center">
        <a href="/" aria-label="Author" className="inline-block mb-1">
          <img
            alt="avatar"
            src="https://i.ibb.co/Drjfsww/1674748227261-1.jpg"
            className="object-cover w-10 h-10 rounded-full shadow-sm"
          />
        </a>
        <div>
          <a
            href="/"
            aria-label="Author"
            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Iftakhar uddin.
          </a>
          <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
        </div>
      </div>
      
      </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
        1 dec 2023
      </p>
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
       
        <p className="text-base text-gray-700 md:text-lg">
        High Flyers helped my business and I know they’ll help yours. After our meetings I now have a much better plan and can actually see the end result.
        </p>
      </div>
      <div className="mb-10 sm:text-center">
        <a href="/" aria-label="Author" className="inline-block mb-1">
          <img
            alt="avatar"
            src="https://i.ibb.co/h1FzvHD/343563647-1301883874091258-3984827919764176120-n.jpg"
            className="object-cover w-10 h-10 rounded-full shadow-sm"
          />
        </a>
        <div>
          <a
            href="/"
            aria-label="Author"
            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Naimul Morshed.
          </a>
          <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
        </div>
      </div>
      
      </div>
    </SwiperSlide>
   
       
</Swiper>
    </>
  )
}

export default Review