import React, { useEffect } from 'react'

import {FaGraduationCap} from "react-icons/fa"
import {BsFillPeopleFill,BsFillHouseDoorFill} from "react-icons/bs"
import {FaPeopleLine,FaSchool} from "react-icons/fa6"
import {GrMoney} from "react-icons/gr"

import Lottie from 'lottie-react'
import service from "../../image/service.json"


const Service = () => {
    
    useEffect(()=>{
        document.title = "HFGE | SERVICE"
      },[])

  return (
<>

<div className=' flex justify-center mb-10 gap-4'>
    <Lottie animationData={service} className=' h-14 w-14'></Lottie>
    <h1 className=' text-3xl lg:text-5xl font-medium border-b-2'>OUR SERVICES</h1>
</div>

<div className=' grid justify-center mb-32 gap-24 '>

    <div className=' flex gap-6 '>

       <FaGraduationCap className=' h-8 w-8 hover:animate-bounce'></FaGraduationCap>
        <div className=' grid  w-[360px]  md:w-[550px]  lg:w-[800px] '>
            <div className=' gap-3 grid '>
                <span className='font-bold text-lg  '> Student Visa <br /></span>
                <span className=' text-justify text-lg '>A student visa is required if you wish to pursue your higher study at abroad. Most foreign nationals need a residence permit before commencing their studies to overseas countries. We are happy to inform you that we have immense collaboration with so many highly reputed universities and colleges around the world. Therefore, you can have an offer-letter within a short span of time that will help you to obtain a quick student visa. We have high expertise people, will monitor you to run into your goals and objectives. Usually students are allowed to work 20 hours per week when the universities and colleges are open, and full time in the summer. Probably we are the best in this country in terms of visa success rate.</span>
            </div>
        </div>
        
    </div>

    <div className=' flex gap-6'>

       <BsFillPeopleFill className=' h-8 w-8 hover:animate-bounce '></BsFillPeopleFill>
        <div className=' grid  w-[360px]  md:w-[550px]  lg:w-[800px] '>
            <div className=' gap-3 grid '>
                <span className='font-bold text-lg  '> Spouse visa <br /></span>
                <span className=' text-justify text-lg  '>Most of the countries allow their spouses and children to accompany with their husband and/or wife at the same time, or later on. Usually a spouse is allowed to study and work full time during the tenure of their study at abroad. Of course, children are also permitted to study, and usually get the local benefits like other students. We give you almost 100% visa assurance especially for spouse visa but you have to keep in mind that we are not embassy that will give you visa, we only can give you the best support and guidance for 100% visa assurance.</span>
            </div>
        </div>
        
    </div>

    <div className=' flex gap-6'>

       <FaPeopleLine className=' h-8 w-8 hover:animate-bounce'></FaPeopleLine>
        <div className=' grid  w-[360px]  md:w-[550px]  lg:w-[800px] '>
            <div className=' gap-3 grid '>
                <span className='font-bold text-lg  '> Visitor Visa <br /></span>
                <span className=' text-justify  '>We can help you with Canadian visit visa with multiple entries, Canadian family visa, Australian visit visa with multiple entries, American visit visa with multiple entries, Schengen visa etc. We are truly expert and our experienced team will give a good guideline that best matches with you based on your profile. We will arrange an invitation letter if it is required for you. Our success rate is truly amazing, we never compromise with quality of service, and we are committed to provide you the excellent service.</span>
            </div>
        </div>
        
    </div>

    <div className=' flex gap-6'>

       <BsFillHouseDoorFill className=' h-8 w-8 hover:animate-bounce'></BsFillHouseDoorFill>
        <div className=' grid  w-[360px]  md:w-[550px]  lg:w-[800px] '>
            <div className=' gap-3 grid '>
                <span className='font-bold text-lg  '> Permanent Immigration <br /></span>
                <span className=' text-justify  '>A student visa is required if you wish to pursue your higher study at abroad. Most foreign nationals need a residence permit before commencing their studies to overseas countries. We are happy to inform you that we have immense collaboration with so many highly reputed universities and colleges around the world. Therefore, you can have an offer-letter within a short span of time that will help you to obtain a quick student visa. We have high expertise people, will monitor you to run into your goals and objectives. Usually students are allowed to work 20 hours per week when the universities and colleges are open, and full time in the summer. Probably we are the best in this country in terms of visa success rate.</span>
            </div>
        </div>
        
    </div>

    <div className=' flex gap-6'>

       <GrMoney className=' h-8 w-8 hover:animate-bounce'></GrMoney>
        <div className=' grid  w-[360px]  md:w-[550px]  lg:w-[800px] '>
            <div className=' gap-3 grid '>
                <span className='font-bold text-lg  '> Investor and/or Entrepreneur visa <br /></span>
                <span className=' text-justify  '>You should have a couple of year’s managerial job experience and/or you should be an entrepreneur along with capability of capital investment Euro 30,000 at least. We are working for Canada, USA and Europe (UK, Estonia, Sweden, and Luxemburg etc.). Probably we are only one business organization in Bangladesh that have a best networking and lobbing around the world for investor and entrepreneur visa. You will have an invitation letter within a short span on time that will help you to have your business visa. We also will arrange an interview for business proposals if it is required.</span>
            </div>
        </div>
        
    </div>
    <div className=' flex gap-6'>

       <FaSchool className=' h-8 w-8 hover:animate-bounce'></FaSchool>
        <div className=' grid  w-[360px]  md:w-[550px]  lg:w-[800px] '>
            <div className=' gap-3 grid '>
                <span className='font-bold text-lg  '> Schooling Visa <br /></span>
                <span className=' text-justify  '>Schooling visa is going to popular steadily over the time. Parent are more conscious about their children’s education. Some families wish to send their children at their early age to highly developed countries to pursue their primary, high school and college education. Their age range usually remain in between 10-17 years of old. As the children are under age of 18, so, parent are also allowed to stay along with their children during the tenure of their study at abroad. The parent are also allowed to work full time that gradually leads to permanent residency to those countries. The education systems of these institutions are IB (International Baccalaureate) standard. We are happy to inform you that we are the partner of so many prestigious schools and colleges around the world especially for Canada, Scotland, UK, USA and Australia. We are happy to serve you!</span>
            </div>
        </div>
        
    </div>

</div>
    
</>
  )
}

export default Service