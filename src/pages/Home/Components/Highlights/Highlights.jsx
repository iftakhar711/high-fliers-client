import Lottie from 'lottie-react'
import React from 'react'
import comming from "../../../../image/coming.json"

const Highlights = () => {
  return (
    <>
    <div className=' grid justify-start  mt-6 mb-6'>
    <h1 className=' text-3xl lg:text-4xl ms-8  font-semibold'>HIGHTLIGHTS</h1>
    <span className='  border-b-2 w-12 ms-8 border-sky-400'></span>
    </div>
    <div className=' grid justify-center mb-14 mt-6'>
        <Lottie animationData={comming}></Lottie>
    </div>
    
    </>
  )
}

export default Highlights