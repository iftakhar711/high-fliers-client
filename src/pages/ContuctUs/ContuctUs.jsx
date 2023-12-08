import Lottie from 'lottie-react'
import React, { useEffect } from 'react'
import contact from "../../image/contact.json"

import {CiLocationOn} from 'react-icons/ci'
import {PiPhoneCallLight} from 'react-icons/pi'
import { HiOutlineMail} from 'react-icons/hi'
import { CiTimer} from 'react-icons/ci'

import {AiFillInstagram} from 'react-icons/ai'
import {BiLogoWhatsappSquare} from 'react-icons/bi'
import { AiFillLinkedin,AiFillFacebook} from 'react-icons/ai'
import { Link } from 'react-router-dom'



const ContuctUs = () => {

  useEffect(()=>{
    document.title = "HFGE | CONTACT"
  },[])

  return (
    <>
    <div className=' grid  justify-center '>
      <h1 className=' text-3xl lg:text-5xl font-medium'>OUR OFFICE</h1>
       <span className=' border-b-2 mt-4 hover:border-sky-700 duration-200  '></span>
    </div>
    <div className=' grid  justify-center gap-6 mb-32 px-4'>
         <Lottie className=' h-32 w-32' animationData={contact}></Lottie>

         <div className=' flex gap-3'>
          <CiLocationOn className= ' h-4 w-4 text-black'></CiLocationOn>
         <h1 className=' text-slate-600'> Rajuk Trade Centre, New Airport Road, Nikunjo-1, Khilkhet, Dhaka, Bangladesh.</h1>
         </div>

         <div className=' flex gap-3'>
          <PiPhoneCallLight></PiPhoneCallLight>
          <h1 className=' text-slate-600'> +880 1869-653084 </h1>
         </div>

         <div className=' flex gap-3'>
          <PiPhoneCallLight></PiPhoneCallLight>
          <h1 className=' text-slate-600'> +4571693347 </h1>
         </div>

         

         <div className=' flex gap-3'>
         <HiOutlineMail></HiOutlineMail>
          <h1 className=' text-slate-600'> highfliersglobal.edu@gmail.com </h1>
         </div>

    
         
         <div className=' flex gap-3'>
          <CiTimer></CiTimer>
          <h1 className=' text-slate-600'>Saturday - Thursday: 10:00 - 5:30
               <br /> Friday: Closed  </h1>
         </div>

         <div className=' flex gap-3 mt-4 '>
          <Link to="https://www.facebook.com/profile.php?id=61552573325783&mibextid=LQQJ4d" target='blank'> <AiFillFacebook className=' h-6 w-6 text-[#0866ff]'></AiFillFacebook></Link>
         
         <AiFillInstagram className=' h-6 w-6 text-[#eb01de]'></AiFillInstagram>
          <AiFillLinkedin className=' h-6 w-6 text-[#317daf]'></AiFillLinkedin>
          <BiLogoWhatsappSquare className=' h-6 w-6 text-[#00e676]'></BiLogoWhatsappSquare>
         </div>
         
         
    </div>
    </>
  )
}

export default ContuctUs